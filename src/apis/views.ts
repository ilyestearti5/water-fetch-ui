export default {
  data: {
    settings: {
      focused: "user",
      label: "settings controler",
      tabs: {
        user: {
          icon: {
            value: "faTools",
          },
        },
        keyboardShortcuts: {
          icon: {
            value: "faKeyboard",
          },
          news: {
            value: "faKeyboard",
          },
        },
        icons: {
          icon: { value: "faIcons" },
        },
        colors: {
          icon: {
            value: "faPenRuler",
            type: "solid",
          },
        },
      },
    },
    "settings.viewType": {
      focused: "list",
      label: "settings layout",
      tab: {
        list: {},
        tree: {},
      },
    },
  },
};
