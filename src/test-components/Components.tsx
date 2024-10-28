import { allIcons } from "@/apis";
import {
  ArrayFeild,
  BooleanFeild,
  Button,
  CardWait,
  CircleLoading,
  DateFeild,
  EmptyComponent,
  EnumFeild,
  FastList,
  Feild,
  FileFeild,
  FilterFeild,
  FullField,
  ImageFeild,
  InfinityScroll,
  MarkDown,
  NumberFeild,
  PasswordFeild,
  PinField,
  RangeFeild,
  RecorderFeild,
  Scroll,
  StringFeild,
  Tab,
  Tabs,
  Translate,
} from "@/components";
import { langHooks, openDatePicker, showToast, useColorMerge, useCopyState } from "@/hooks";
import { BottomSheetLayout } from "@/layouts";
import { delay, range } from "@/utils";
import React from "react";
const markDownArrayContent = [
  "# First Section",
  "## Second Section",
  "```js",
  "console.log('Hello World')",
  "```",
  "```ts",
  "const a : number = 3",
  "```",
  "```html",
  "<div>",
  "  <h1>Hello World</h1>",
  "</div>",
  "```",
  "End",
  "**Bold Content**",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam autem, suscipit iusto assumenda culpa repudiandae et quisquam nemo eveniet corrupti dignissimos blanditiis molestiae saepe placeat ut vel fugit velit illo? Similique id quis eius modi consequuntur nulla distinctio? Alias cumque, qui fugiat rerum possimus cupiditate nihil hic, asperiores amet beatae porro, veniam quaerat omnis quo voluptatibus est vero atque enim ullam sit itaque! Ipsa animi reprehenderit dolorum unde magni eligendi. Ut nostrum vel amet magni nihil, sit harum exercitationem debitis tenetur enim nesciunt culpa blanditiis eius dolores quod, quisquam dignissimos et quaerat illo dolore. Natus voluptatibus illum numquam similique beatae rem, necessitatibus praesentium culpa pariatur aut eveniet ab odit. Numquam sed molestias deserunt, ipsam deleniti laborum repellat recusandae amet? At distinctio saepe consectetur! Hic sequi rerum beatae fugiat quaerat, laborum ullam exercitationem vero autem corrupti magni quisquam possimus culpa, tempore unde esse optio alias qui tenetur et quia voluptatum explicabo. Fuga, obcaecati earum? Asperiores in cum iure earum, suscipit illum consequatur et repellendus provident deleniti dolorum vero reiciendis quibusdam nesciunt modi nisi incidunt laborum atque temporibus ipsum explicabo rem architecto officiis? Expedita facere tenetur, quis aut vel autem! Dolore a rem sint et quod reprehenderit consequatur nesciunt nulla suscipit. Neque explicabo veniam accusamus aut laudantium adipisci repudiandae doloribus impedit quae, ad culpa dolore reiciendis ipsam facilis quam repellendus voluptatem voluptates officia ratione ex expedita mollitia error. Vero aspernatur molestiae soluta nobis, fuga unde aliquam eos officia id, provident illum, cupiditate architecto veniam facere hic autem explicabo esse animi non. Beatae expedita harum error, accusamus ipsam temporibus maiores ex consectetur illo itaque delectus asperiores quaerat natus labore porro provident, mollitia exercitationem sint! Reprehenderit hic commodi sunt doloremque deserunt? Illum quas voluptas laudantium, deleniti cumque iure odio expedita nostrum eum quaerat, quasi perferendis consectetur laboriosam necessitatibus! Praesentium veritatis natus quod suscipit perspiciatis dolorum libero adipisci fuga commodi consequuntur, officiis, iusto et fugit aspernatur voluptatem placeat aut. Consectetur sunt qui beatae in quia saepe! Unde eius obcaecati eligendi facilis veritatis consequuntur, hic odio dolore aliquid odit, soluta totam ducimus amet commodi ullam consequatur quo distinctio magnam, ratione eum sunt. Quasi molestiae voluptate quam laboriosam asperiores sunt dolorem labore deleniti magni vitae atque illum ullam, id facere architecto error nihil veniam magnam a, sequi dignissimos sit commodi non iusto. Neque vero iste animi, odio harum expedita nihil quidem eveniet assumenda explicabo laborum officia culpa sint alias aut unde deserunt temporibus autem reprehenderit natus et. Aliquam reiciendis exercitationem accusantium nisi architecto odit deserunt impedit, magnam ipsam, quibusdam nesciunt eius tenetur dolor. Ea delectus cupiditate animi, praesentium corporis ratione doloribus eligendi quos fugiat laboriosam quas maiores maxime quod? Ea fugit quas aut doloribus itaque molestias sed impedit id possimus, cupiditate nemo architecto vel quibusdam dolores harum eos eaque cumque dolor provident aliquam corrupti? Aut, saepe, delectus tenetur, quasi nemo esse enim excepturi totam ipsa minus earum ipsam odit. Minus voluptate cumque libero commodi, doloremque veniam! Quos maiores illum veniam! Eveniet aut vero expedita animi mollitia distinctio incidunt tempore blanditiis ab, odio natus optio qui. Unde?",
];
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
  const tabs = React.useMemo(() => {
    return [
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
    ];
  }, []);
  return (
    <EmptyComponent>
      <Tabs state={activeTab} tabs={tabs} direction="vertical" />
      <Tabs state={activeTab} tabs={tabs} direction="horizontal" />
    </EmptyComponent>
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
  return (
    <ArrayFeild
      state={arrayFieldState}
      id="array-field"
      config={{
        controls: {
          "^[^0-9]": {
            err: "Cannot Add Item Start With Number",
          },
        },
      }}
    />
  );
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
            autoChange: true,
          },
          type: "string",
          icon: allIcons.solid.faUser,
        },
        age: {
          label: "your age",
          config: {
            autoChange: true,
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
          type: "string",
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
export const CardWaitCode = () => {
  return <CardWait className="h-[200px]" />;
};
export const BottomSheetLayoutCode = () => {
  const currentTab = useCopyState("markdown");
  return (
    <BottomSheetLayout min={"80vh"}>
      <div className="relative flex flex-col gap-y-3 overflow-hidden">
        <div className="sticky p-1">
          <div className="flex justify-center">
            <Tabs
              state={currentTab}
              tabs={[
                {
                  label: "Mark Down",
                  value: "markdown",
                  icon: allIcons.solid.faBookReader,
                },
                {
                  label: "UI's",
                  value: "ui",
                  icon: allIcons.solid.faHandsAmericanSignLanguageInterpreting,
                },
              ]}
            />
          </div>
        </div>
        <Scroll className="p-2 h-full">{currentTab.get == "markdown" && <MarkDown value={markDownArrayContent.join("\n")} />}</Scroll>
      </div>
    </BottomSheetLayout>
  );
};
export const DatePickerCode = () => {
  return (
    <Button
      onClick={async () => {
        let { time } = await openDatePicker({});
        showToast(time.toString(), "info");
      }}
    >
      <Translate content="open date picker" />
    </Button>
  );
};
