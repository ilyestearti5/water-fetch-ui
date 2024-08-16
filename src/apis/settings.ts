export default {
  data: {
    "activity/position.enum": {
      config: {
        list: [
          {
            content: "left side",
            value: "leftSide",
          },
          {
            content: "right side",
            value: "rightSide",
          },
        ],
      },
      def: "leftSide",
      desc: "activity position in the sides has two values ${state.settings.entities['activity/position.enum']?.config.list?.map(({ content })=> '\\`' + content '\\`')}",
      name: "activity side position",
    },
    "camera/clear/time.number": {
      config: {
        max: 5,
        min: 1,
      },
      def: 4,
      desc: "time to clear the qrcode output by s and is between (**1**) to (**5**)",
      name: "time to clear",
    },
    "camera/loading/time.number": {
      def: 5,
      desc: "time of loading camera by ms",
      name: "loading time camera",
    },
    "preferences/animation.boolean": {
      def: true,
      desc: "animation in the preferences",
      name: "animation in preferences",
    },
    "preferences/fastScrollKey.enum": {
      config: {
        list: [
          {
            value: "alt",
          },
          {
            value: "control",
          },
          {
            value: "shift",
          },
        ],
      },
      def: "alt",
      desc: "is one between this keys ${state.settings.entities['preferences/fastScrollKey.enum']?.config.list.map(({ value })=> '**' + value + '**').join(' , ')} and when press one of them the scrolling gona be faster",
      name: "speed scrolling meta key",
    },
    "preferences/font.enum": {
      config: {
        list: [
          {
            content: "Outfit",
            value: "Outfit",
          },
          {
            content: "Karla",
            value: "Karla",
          },
          {
            content: "arial",
            value: "arial",
          },
          {
            content: "times new roman",
            value: "times new roman",
          },
          {
            content: "verdana",
            value: "verdana",
          },
          {
            content: "tahoma",
            value: "tahoma",
          },
          {
            content: "georgia",
            value: "georgia",
          },
          {
            content: "courier new",
            value: "courier new",
          },
          {
            content: "lucida console",
            value: "lucida console",
          },
          {
            content: "impact",
            value: "impact",
          },
          {
            content: "comic sans ms",
            value: "comic sans ms",
          },
          {
            content: "system ui",
            value: "system-ui",
          },
        ],
      },
      def: "Outfit",
      desc: "change one between this fonts ${state.settings.entities['preferences/font.enum']?.config.list.map(({ content })=> '`' + content + '`').join(' , ')}",
      name: "change font of app",
    },
    "preferences/toastTime.number": {
      config: {
        max: 10,
        min: 1,
      },
      def: 6,
      desc: "is in `second`",
      name: "time of toast done",
    },
    "settings/findBy.enum": {
      config: {
        list: [
          {
            content: "setting id",
            value: "settingId",
          },
          {
            value: "setting",
          },
          {
            value: "name",
          },
        ],
      },
      def: "name",
      desc: "the method of how to find \\`setting\\` using one of this:\n${state.settings.entities['settings/findBy.enum']?.config?.list?.map((item)=> '**' + item + '**' ).join(' or ')}",
      name: "find settings using ?",
    },
    "toast/position.enum": {
      config: {
        list: [
          {
            content: "top",
            value: "top",
          },
          {
            content: "bottom",
            value: "bottom",
          },
        ],
      },
      def: "top",
      desc: "the position of the toast is one between ${state.settings.entities['toast/position.enum']?.config.list.map(({ content })=> '`' + content + '`').join(' , ')}",
      name: "toast position",
    },
    "visibility/activity.boolean": {
      def: true,
      name: "activity visibility",
    },
    "visibility/configurations.boolean": {
      def: false,
      desc: "hide or visible the configurations view",
      name: "visibility of configurations view",
      private: true,
    },
    "visibility/header.boolean": {
      def: true,
      name: "header view visibility",
    },
    "visibility/headerNotifays.boolean": {
      def: false,
      name: "header panel notifications visibility",
      private: true,
    },
    "visibility/keyPanding/form.boolean": {
      def: false,
      private: true,
    },
    "visibility/leftSide.boolean": {
      def: false,
      desc: "viibility of **left side**  component",
      name: "left side visibility",
    },
    "visibility/notifays.boolean": {
      def: false,
      desc: "visibility of **notification** view",
      name: "notification visibility",
      private: true,
    },
    "visibility/notifays/nots.boolean": {
      def: false,
      private: true,
    },
    "visibility/rightSide.boolean": {
      def: false,
      desc: "visibility of **right side** component",
      name: "right side visibility",
    },
    "window/dark.boolean": {
      config: {
        style: "checkbox",
      },
      def: false,
      desc: "change the theme of the app to dark mode",
      name: "dark mode",
    },
    "window/lang.enum": {
      config: {
        list: [
          {
            content: "arabic",
            value: "ar",
          },
          {
            content: "france",
            value: "fr",
          },
          {
            content: "englich",
            value: "en",
          },
          {
            content: "espaniche",
            value: "es",
          },
          {
            content: "india",
            value: "hi",
          },
          {
            content: "japanese",
            value: "ja",
          },
          {
            content: "russian",
            value: "ru",
          },
        ],
      },
      def: "en",
      desc: "change one between this langs ${state.settings.entities['window/lang.enum']?.config.list.map(({ content })=> '`' + content + '`').join(' , ')}",
      name: "change lang of app",
    },
    "window/scroll/animation.boolean": {
      def: false,
      desc: "scrolling with animation",
      name: "scroll animation",
    },
    "visibility/keyboard.boolean": {
      name: "Keyboard Visibility",
      desc: "The Visibility Of Keyboard Screen",
      def: false,
    },
  },
};
