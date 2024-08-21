import React from "react";
import { CircleTip } from "@/components/CircleTip";
import { faMicrophone, faPause, faPlay, faStop, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCopyState } from "@/hooks";
import { useColorMerge } from "@/hooks";
import { FeildGeneralProps } from "@/types/global";
import { openDuringNotifay } from "@/data/system/notifications.model";
import { EmptyComponent } from "./EmptyComponent";
import { openDialog } from "@/functions/app/web/web-utils";
export type RecorderFeildProps = FeildGeneralProps<string | null, {}>;
export function RecorderFeild({ id, state }: RecorderFeildProps) {
  const mediaRecorder = useCopyState<MediaRecorder | null>(null);
  const chunks = useCopyState<BlobPart[]>([]);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const colorMerge = useColorMerge();
  const isStartRecorder = useCopyState(false);
  const isStarted = useCopyState(false);
  const handleStartRecording = React.useCallback(async () => {
    const localChunks: BlobPart[] = [];
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (stream) {
        const recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (e) => {
          localChunks.push(e.data);
          chunks.set(localChunks);
        };
        recorder.onstop = async () => {
          const blob = new Blob(localChunks, { type: "audio/mp3" });
          try {
            const url = URL.createObjectURL(blob);
            state.set(url);
          } catch (error) {}
        };
        recorder.start();
        mediaRecorder.set(recorder);
      } else {
        chunks.set([]);
        mediaRecorder.set(null);
        await openDuringNotifay({
          type: "error",
          title: "No audio stream detected",
          desc: "Please allow the audio stream to record the audio",
          id: "recorder.error",
          showDesc: true,
        });
      }
    } catch (error: any) {
      chunks.set([]);
      mediaRecorder.set(null);
      await openDuringNotifay({
        type: "error",
        title: "Error detected",
        desc: String(error.message),
        id: "recorder.error",
        showDesc: true,
      });
    }
  }, []);
  const handleStopRecording = React.useCallback(() => {
    mediaRecorder.get?.stop();
  }, [mediaRecorder.get]);
  React.useEffect(() => {
    return () => {
      handleStopRecording();
    };
  }, [handleStopRecording]);
  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onplay = () => {
        isStarted.set(true);
      };
      audioRef.current.onpause = () => {
        isStarted.set(false);
      };
      audioRef.current.onended = () => {
        isStarted.set(false);
      };
    }
  }, [audioRef.current]);
  const timer = useCopyState<number | null>(null);
  React.useEffect(() => {
    if (isStarted.get) {
      const timerInterval = setInterval(() => {
        timer.set((s) => (s ?? 0) + 1);
      }, 1000);
      return () => {
        clearInterval(timerInterval);
      };
    } else {
      timer.set(null);
    }
  }, [isStarted.get]);
  return (
    <div className="flex gap-2">
      <div className="inline-flex relative gap-1">
        {state.get && (
          <EmptyComponent>
            <CircleTip
              icon={faXmark}
              onClick={async () => {
                const { response } = await openDialog({
                  title: "Delete audio",
                  message: "Are you sure you want to delete the audio?",
                  type: "warning",
                  buttons: ["No", "Yes"],
                });
                if (response === 1) state.set(null);
              }}
            />
            <CircleTip
              onClick={() => {
                !isStarted.get ? audioRef.current?.play() : audioRef.current?.pause();
              }}
              icon={isStarted.get ? faPause : faPlay}
            />
          </EmptyComponent>
        )}
        <CircleTip
          id={id}
          style={{
            ...colorMerge(
              isStartRecorder.get && {
                backgroundColor: "primary",
                color: "primary.content",
              },
            ),
          }}
          onClick={async () => {
            if (state.get) {
              const { response } = await openDialog({
                title: "Overwrite audio",
                message: "Are you sure you want to overwrite the audio?",
                type: "warning",
                buttons: ["No", "Yes"],
              });
              if (!response) {
                return;
              }
            }
            isStartRecorder.set((s) => !s);
            if (isStartRecorder.get) {
              handleStopRecording();
            } else {
              handleStartRecording();
            }
          }}
          icon={isStartRecorder.get ? faStop : faMicrophone}
        />
        {state.get && <audio ref={audioRef} src={state.get} />}
      </div>
    </div>
  );
}
