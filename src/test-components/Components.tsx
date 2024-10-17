import { allIcons } from "@/apis";
import {
  ArrayFeild,
  BooleanFeild,
  CircleLoading,
  DateFeild,
  EnumFeild,
  FastList,
  Feild,
  FileFeild,
  FilterFeild,
  FullField,
  ImageFeild,
  InfinityScroll,
  LineLoading,
  NumberFeild,
  PasswordFeild,
  PinField,
  RangeFeild,
  RecorderFeild,
  StringFeild,
  Tab,
  Tabs,
} from "@/components";
import { langHooks, showToast, useColorMerge, useCopyState } from "@/hooks";
import { delay, range } from "@/utils";
import React from "react";
export const PinFieldCode = () => {
  const pinFieldState = useCopyState<string | undefined>(undefined);
  return (
    <PinField
      config={{
        match: "..-..",
        size: 30,
      }}
      state={pinFieldState}
      id="pin-field"
    />
  );
};
export const FieldCode = () => {
  const langsTranslations = langHooks.getAll();
  const words = React.useMemo(() => {
    return langsTranslations
      .map(({ word, ...allTranlations }) =>
        Object.values(allTranlations)
          .map((w) => w.split(/ +/gi))
          .flat(),
      )
      .flat();
  }, [langsTranslations]);
  return <Feild className="h-[200px]" multiLines inputName="exmple" propositions={words} placeholder="Input Exmple" />;
};
export const BooleanFieldCode = () => {
  const booleanFieldState = useCopyState<null | boolean>(null);
  return <BooleanFeild state={booleanFieldState} id="boolean-field" />;
};
export const StringFieldCode = () => {
  const stringFieldState = useCopyState<string | undefined>(undefined);
  return (
    <StringFeild
      state={stringFieldState}
      config={{
        autoChange: true,
      }}
      id="string-field"
    />
  );
};
export const EnumFieldCode = () => {
  const enumFieldState = useCopyState<string | undefined>(undefined);
  return (
    <EnumFeild
      config={{
        list: range(0, 10).map((num) => {
          return {
            value: num.toString(),
            content: "Number " + num,
            desc: "Choise `Number` " + num,
          };
        }),
      }}
      id="enum-field"
      state={enumFieldState}
    />
  );
};
export const PasswordFieldCode = () => {
  const passwordFieldState = useCopyState<string | undefined>(undefined);
  return <PasswordFeild state={passwordFieldState} id="password-field" />;
};
export const NumberFieldCode = () => {
  const numberFieldState = useCopyState<number | undefined | null>(3);
  return <NumberFeild state={numberFieldState} id="number-field" />;
};
export const RangeFieldCode = () => {
  const rangeFieldState = useCopyState<number>(2);
  return (
    <div className="flex flex-col gap-20">
      <RangeFeild
        state={rangeFieldState}
        config={{
          min: 5,
          max: 10,
          marked: {
            8: "orange",
          },
        }}
        id="range-field"
      />
      <RangeFeild
        state={rangeFieldState}
        config={{
          min: 5,
          max: 10,
          isFloat: true,
          showValue: true,
        }}
        id="range-field-float"
      />
    </div>
  );
};
export const FileFieldCode = () => {
  const fileFieldState = useCopyState<string[] | null>(null);
  return (
    <FileFeild
      config={{
        properties: ["multiSelections"],
      }}
      state={fileFieldState}
      id="file-field"
    />
  );
};
export const TabsCode = () => {
  const activeTab = useCopyState("home");
  return (
    <Tabs
      state={activeTab}
      tabs={[
        {
          value: "home",
          label: "Home",
          icon: allIcons.solid.faHome,
        },
        {
          value: "about",
          label: "About",
          icon: allIcons.solid.faInfo,
        },
        {
          value: "contact",
          label: "Contact",
          icon: allIcons.solid.faPhone,
        },
        {
          value: "settings",
          label: "Settings",
          icon: allIcons.solid.faCog,
        },
      ]}
    />
  );
};
export const TabCode = () => {
  const homePageIsActive = useCopyState(false);
  return (
    <Tab
      className="text-4xl"
      isActive={homePageIsActive.get}
      onClick={() => {
        homePageIsActive.set(!homePageIsActive.get);
      }}
      icon={allIcons.solid.faHome}
    />
  );
};
export const FilterFieldCode = () => {
  const filterFieldState = useCopyState<string[] | undefined>(undefined);
  return (
    <FilterFeild
      config={{
        list: [
          {
            content: "Dog",
            value: "dog",
          },
          {
            content: "Cat",
            value: "cat",
          },
        ],
      }}
      state={filterFieldState}
      id="filter-field"
    />
  );
};
export const ArrayFieldCode = () => {
  const arrayFieldState = useCopyState<string[] | undefined>(undefined);
  return <ArrayFeild state={arrayFieldState} id="array-field" />;
};
export const DateFieldCode = () => {
  const dateFieldState = useCopyState<null | string | undefined>(null);
  return <DateFeild state={dateFieldState} id="date-field" />;
};
export const ImageFieldCode = () => {
  const imageFieldState = useCopyState<string | null>(null);
  return (
    <ImageFeild
      state={imageFieldState}
      config={{
        rounded: true,
      }}
      id="image-field"
    />
  );
};
export const RecorderFieldCode = () => {
  const recorderFieldState = useCopyState<string | null>(null);
  return <RecorderFeild id="recorder-field" state={recorderFieldState} />;
};
export const FullFieldCode = () => {
  const fullObjectState = useCopyState<Record<string, any>>({});
  return (
    <FullField
      id="somthing"
      list={{
        name: {
          label: "your name",
          config: {
            proposition: ["Ilyes", "Ahmed"],
            authChange: true,
          },
          type: "string",
          icon: allIcons.solid.faUser,
        },
        age: {
          label: "your age",
          config: {
            authChange: true,
          },
          type: "number",
          onNext({ state, stop }) {
            const num = state["age"];
            if (typeof num == "number" && num < 50) {
              showToast("your small");
              stop();
            }
          },
          icon: allIcons.solid.faListNumeric,
        },
        "phone-number": {
          label: "Your Phone Number",
          config: {},
          type: "number",
          onNext({ stop, currentValue }) {
            if (currentValue?.toString().match(/[0-9]/gi)) {
            } else {
              showToast("Number Is Not Correct!", "warning");
              stop();
            }
          },
          icon: allIcons.solid.faPhone,
        },
        photo: {
          config: {
            alt: "Upload Your Picture",
            rounded: true,
          },
          label: "Your Picture",
          icon: allIcons.solid.faImage,
          type: "image",
          onNext({ stop, currentValue }) {
            if (typeof currentValue != "string") {
              stop();
              showToast("Upload Your Picture First", "error");
            }
          },
        },
        "my-code": {
          label: "Your Pin Sm",
          config: {
            match: "..-..",
          },
          type: "pin",
          icon: allIcons.solid.faAmbulance,
        },
      }}
      state={fullObjectState}
    />
  );
};
export const FastListCode = () => {
  return (
    <div className="w-[300px] h-[200px] overflow-hidden">
      <FastList
        data={range(25).map((index) => ({ index }))}
        focusId="list"
        slotId="list"
        itemSize={30}
        component={({ data, style }) => {
          return (
            <div
              style={{
                ...style,
              }}
              className="flex items-center px-3"
            >
              {data.index}
            </div>
          );
        }}
      />
    </div>
  );
};
export const InfinityScrollCode = () => {
  const largeData = React.useMemo(() => {
    return range(300);
  }, []);
  const colorMerge = useColorMerge();
  return (
    <div className="w-full h-[200px] overflow-hidden">
      <InfinityScroll<number, number>
        onUpdate={async ({ state }) => {
          await delay(1000);
          let s = typeof state == "undefined" ? 0 : state;
          let result = largeData.slice(s, s + 10);
          return {
            state: s + result.length,
            data: result,
          };
        }}
        className="flex-none"
        onLoading={() => (
          <div className="flex justify-center p-2">
            <CircleLoading />
          </div>
        )}
        render={(data, index) => {
          return (
            <div
              key={index}
              style={{
                ...colorMerge(index % 2 && "gray.opacity"),
              }}
            >
              <div className="flex justify-center items-center h-[50px]">{data}</div>
            </div>
          );
        }}
      />
    </div>
  );
};
