import React from "react";
import { Tip } from "@/components/Tip";
import { faMicrophone, faPause, faPlay, faStop, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCopyState } from "@/hooks";
import { useColorMerge } from "@/hooks";
import { FeildGeneralProps } from "@/types/global";
import { openDuringNotifay } from "@/data/system/notifications.model";
import { EmptyComponent } from "./EmptyComponent";
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
  return (
    <div className="flex gap-2">
      <div className="inline-block relative">
        {state.get && (
          <EmptyComponent>
            <Tip
              icon={faXmark}
              onClick={() => {
                state.set(null);
              }}
            />
            <Tip
              onClick={() => {
                !isStarted.get ? audioRef.current?.play() : audioRef.current?.pause();
              }}
              icon={isStarted.get ? faPause : faPlay}
            />
          </EmptyComponent>
        )}
        <Tip
          id={id}
          style={{
            ...colorMerge(
              isStartRecorder.get && {
                backgroundColor: "primary",
                color: "primary.content",
              },
            ),
          }}
          onClick={() => {
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
