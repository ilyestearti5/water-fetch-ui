export default {
  data: {
    "camera-take": {
      commands: [
        {
          payload: ["camera-take"],
          type: "actions/exec",
        },
      ],
    },
    "colors-list-back": {
      commands: [
        {
          payload: "colors-list",
          type: "slot/back",
        },
      ],
    },
    "colors-list-next": {
      commands: [
        {
          payload: "colors-list",
          type: "slot/next",
        },
      ],
    },
    "colors-list-submit": {
      commands: [
        {
          payload: "colors-list",
          type: "slot/submit",
        },
      ],
    },
    "commands.back": {
      commands: [
        {
          payload: "cmds/list",
          type: "slot/back",
        },
      ],
      label: "commands : back",
    },
    "commands.close": {
      commands: [
        {
          payload: {
            direction: "commandId",
            force: true,
            value: null,
          },
          type: "object/setValue",
        },
      ],
      label: "view : close commands",
    },
    "commands.next": {
      commands: [
        {
          payload: "cmds/list",
          type: "slot/next",
        },
      ],
      label: "commands : next",
    },
    "commands.open": {
      commands: [
        {
          payload: {
            direction: "commandId",
            force: true,
            value: "commands",
          },
          type: "object/setValue",
        },
      ],
      label: "view : open commands",
    },
    "commands.submit": {
      commands: [
        {
          payload: "cmds/list",
          type: "slot/submit",
        },
      ],
      label: "commands : run",
    },
    "configurations.back": {
      commands: [
        {
          payload: "configurations",
          type: "slot/back",
        },
      ],
      label: "settings : back",
    },
    "configurations.next": {
      commands: [
        {
          payload: "configurations",
          type: "slot/next",
        },
      ],
      label: "settings : next",
    },
    "configurations.settings.layout.submit": {
      commands: [
        {
          payload: "settings.layout.tools",
          type: "slot/submit",
        },
      ],
      label: "settings layout : change",
    },
    "configurations.settings.layouts.next": {
      commands: [
        {
          payload: "settings.layout.tools",
          type: "slot/next",
        },
      ],
      label: "settings layout : next",
    },
    "configurations.settings.layouts.previous": {
      commands: [
        {
          payload: "settings.layout.tools",
          type: "slot/back",
        },
      ],
      label: "settings layout : previous",
    },
    "configurations.submit": {
      commands: [
        {
          payload: "configurations",
          type: "slot/submit",
        },
      ],
      label: "settings : submit",
    },
    "defaultCommand.ignore": {
      commands: [],
      private: true,
    },
    "dialog.clickOnButton": {
      commands: [
        {
          payload: "dialog-list",
          type: "slot/submit",
        },
      ],
      label: "Dialog : Click And Submit",
    },
    "dialog.escape": {
      commands: [
        {
          payload: ["dialog.cancel"],
          type: "actions/exec",
        },
      ],
      label: "Dialog : Escape",
    },
    "dialog.goToNextButton": {
      commands: [
        {
          payload: "dialog-list",
          type: "slot/next",
        },
      ],
      label: "Dialog : Next Button",
    },
    "dialog.goToPreviousButton": {
      commands: [
        {
          payload: "dialog-list",
          type: "slot/back",
        },
      ],
      label: "Dialog : Previous Button",
    },
    "feedback/add": {
      commands: [
        {
          payload: ["feedback/add"],
          type: "actions/exec",
        },
      ],
      label: "help : add new feedback",
    },
    "header.toggle": {
      commands: [
        {
          payload: "visibility/header.boolean",
          type: "settings/toggle",
        },
      ],
      label: "view : toggle header",
    },
    "headerNotifays.toggleExpand": {
      commands: [
        {
          payload: "visibility/headerNotifays.boolean",
          type: "settings/toggle",
        },
      ],
      label: "view : toggle header notifications",
    },
    "input.addLineBellow": {
      commands: [
        {
          payload: ["input.addLineBellow"],
          type: "actions/exec",
        },
      ],
      label: "input : add line bellow",
    },
    "input.completeWord": {
      commands: [
        {
          payload: ["input.completeWord"],
          type: "actions/exec",
        },
      ],
      label: "input : complete word",
    },
    "input.selectLine": {
      commands: [
        {
          payload: ["input.selectLine"],
          type: "actions/exec",
        },
      ],
      label: "input : select line",
    },
    "input.tab": {
      commands: [
        {
          payload: ["input.tab"],
          type: "actions/exec",
        },
      ],
      label: "input : tab space",
    },
    "keyboard/update": {
      commands: [
        {
          payload: ["keyboard/update"],
          type: "actions/exec",
        },
      ],
    },
    "keyboardShortcuts.focusNextKeyPanding": {
      commands: [
        {
          payload: "keyboardShortcuts",
          type: "slot/next",
        },
      ],
      label: "keyboard shortcuts : focus next",
    },
    "keyboardShortcuts.focusPreviousKeyPanding": {
      commands: [
        {
          payload: "keyboardShortcuts",
          type: "slot/back",
        },
      ],
      label: "keyboard shortcuts : focus previous",
    },
    "keyboardShortcuts.submitCurrentKeyPanding": {
      commands: [
        {
          payload: "keyboardShortcuts",
          type: "slot/submit",
        },
      ],
      label: "keyboard shortcuts : submit current",
    },
    "menu.back": {
      commands: [
        {
          payload: "menu-list",
          type: "slot/back",
        },
      ],
    },
    "menu.escape": {
      commands: [
        {
          payload: {
            direction: "menu.id",
            force: true,
            value: null,
          },
          type: "object/setValue",
        },
      ],
    },
    "menu.next": {
      commands: [
        {
          payload: "menu-list",
          type: "slot/next",
        },
      ],
    },
    "menu.submit": {
      commands: [
        {
          payload: "menu-list",
          type: "slot/submit",
        },
      ],
    },
    "notifays.toggleExpandNotifay": {
      commands: [
        {
          payload: ["toggleExpandNotifay", null],
          type: "actions/exec",
        },
      ],
      label: "notifications : toggle expand notifications",
    },
    "notification.close": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: false,
              },
              id: "visibility/notifays.boolean",
            },
          ],
          type: "settings/update",
        },
      ],
      label: "view : close notifications",
    },
    "notification.closeAndExpandLess": {
      commands: [
        "notification.close",
        {
          payload: [
            {
              changes: {
                value: false,
              },
              id: "visibility/notifays/notes.boolean",
            },
          ],
          type: "settings/update",
        },
      ],
      label: "view : close notifications and expand less",
    },
    "notification.deleteFocus": {
      commands: [
        {
          payload: ["notification.deleteFocus"],
          type: "actions/exec",
        },
      ],
      label: "notifications : delete the focused notification",
    },
    "notification.focusNext": {
      commands: [
        {
          payload: "notification",
          type: "slot/next",
        },
      ],
      label: "notifications : go next",
    },
    "notification.focusPrevious": {
      commands: [
        {
          payload: "notification",
          type: "slot/back",
        },
      ],
      label: "notifications: go back",
    },
    "notification.open": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: true,
              },
              id: "visibility/notifays.boolean",
            },
          ],
          type: "settings/update",
        },
      ],
      label: "notifications : open",
    },
    "notification.openAndExpandMoreAndFocus": {
      commands: [
        "notification.open",
        {
          payload: [
            {
              changes: {
                value: true,
              },
              id: "visibility/notifays/notes.boolean",
            },
          ],
          type: "settings/update",
        },
        {
          payload: ["focus", "notifications"],
          type: "actions/exec",
        },
      ],
      label: "notifications : open and expand more and focus",
    },
    "notification.submitCurrent": {
      commands: [
        {
          payload: "notification",
          type: "slot/submit",
        },
      ],
      label: "notifications : submit current",
    },
    "notification.toggle": {
      commands: [
        {
          payload: "visibility/notifays.boolean",
          type: "settings/toggle",
        },
      ],
      label: "view : toggle notifications",
    },
    "search.history.clear": {
      commands: [
        {
          payload: ["search.history.clear"],
          type: "actions/exec",
        },
      ],
      label: "search : clear history",
    },
    "settings.colors.show": {
      commands: [
        {
          payload: [
            {
              changes: {
                focused: "colors",
              },
              id: "settings",
            },
          ],
          type: "views/update",
        },
      ],
    },
    "settings.focusNext": {
      commands: [
        {
          payload: "settings",
          type: "slot/next",
        },
      ],
    },
    "settings.focusPrevious": {
      commands: [
        {
          payload: "settings",
          type: "slot/back",
        },
      ],
    },
    "settings.icons.back": {
      commands: [
        {
          payload: "icons-list",
          type: "slot/back",
        },
      ],
    },
    "settings.icons.next": {
      commands: [
        {
          payload: "icons-list",
          type: "slot/next",
        },
      ],
    },
    "settings.icons.show": {
      commands: [
        {
          payload: [
            {
              changes: {
                focused: "icons",
              },
              id: "settings",
            },
          ],
          type: "views/update",
        },
      ],
    },
    "settings.icons.submit": {
      commands: [
        {
          payload: "icons-list",
          type: "slot/submit",
        },
      ],
    },
    "settings.keyboardShortcuts.show": {
      commands: [
        {
          payload: [
            {
              changes: {
                focused: "keyboardShortcuts",
              },
              id: "settings",
            },
          ],
          type: "views/update",
        },
      ],
    },
    "settings.tree.expandLess": {
      commands: [
        {
          payload: "setting-tree-layout",
          type: "tree/expandLess",
        },
      ],
    },
    "settings.tree.expandMore": {
      commands: [
        {
          payload: "setting-tree-layout",
          type: "tree/expandMore",
        },
      ],
    },
    "settings.tree.toggleExpand": {
      commands: [
        {
          payload: "setting-tree-layout",
          type: "tree/toggleExpand",
        },
      ],
    },
    "settings.user.show": {
      commands: [
        {
          payload: [
            {
              changes: {
                focused: "user",
              },
              id: "settings",
            },
          ],
          type: "views/update",
        },
      ],
    },
    "show.submit.setting": {
      commands: [
        {
          payload: ["showSubmitSetting", null],
          type: "actions/exec",
        },
      ],
    },
    "string.cancel": {
      commands: [
        {
          payload: ["string.cancel"],
          type: "actions/exec",
        },
      ],
      private: true,
    },
    "string.change": {
      commands: [
        {
          payload: ["string.change"],
          type: "actions/exec",
        },
      ],
      private: true,
    },
    "tools.tip.click": {
      commands: [
        {
          payload: ["tip.click"],
          type: "actions/exec",
        },
      ],
    },
    "view.leftSide.close": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: false,
              },
              id: "visibility/leftSide.boolean",
            },
          ],
          type: "settings/update",
        },
      ],
      label: "leftSide : close",
    },
    "view.leftSide.open": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: true,
              },
              id: "visibility/leftSide.boolean",
            },
          ],
          type: "settings/update",
        },
      ],
    },
    "view.leftSide.toggle": {
      commands: [
        {
          payload: "visibility/leftSide.boolean",
          type: "settings/toggle",
        },
      ],
    },
    "view.rightSide.close": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: false,
              },
              id: "visibility/rightSide.boolean",
            },
          ],
          type: "settings/update",
        },
      ],
    },
    "view.rightSide.open": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: true,
              },
              id: "visibility/rightSide.boolean",
            },
          ],
          type: "settings/update",
        },
      ],
    },
    "view.rightSide.toggle": {
      commands: [
        {
          payload: "visibility/rightSide.boolean",
          type: "settings/toggle",
        },
      ],
    },
    "view.settings.hide": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: false,
              },
              id: "visibility/configurations.boolean",
            },
          ],
          type: "settings/update",
        },
      ],
      label: "view : hide settings view",
    },
    "view.settings.show": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: true,
              },
              id: "visibility/configurations.boolean",
            },
          ],
          type: "settings/update",
        },
        {
          payload: [
            {
              changes: {
                value: "",
              },
              id: "findConfigurations-local",
            },
          ],
          type: "fields/update",
        },
        {
          payload: ["focus", "findConfigurations-local"],
          type: "actions/exec",
        },
      ],
      label: "view : show settings view",
    },
    "view.settings.update.hide": {
      commands: [
        {
          payload: {
            direction: "view.settings",
            force: true,
            value: null,
          },
          type: "object/setValue",
        },
        {
          payload: ["focus", "findConfigurations-local"],
          type: "actions/exec",
        },
      ],
      label: "view : hide settings update view",
    },
    "window.toggleMode": {
      commands: [
        {
          payload: "window/dark.boolean",
          type: "settings/toggle",
        },
      ],
      label: "window : toggle between (light/dark) mode",
    },
    "enum/next": {
      commands: [
        {
          type: "slot/next",
          payload: "enum-list",
        },
      ],
      label: "enum : go to next",
    },
    "enum/back": {
      commands: [
        {
          type: "slot/back",
          payload: "enum-list",
        },
      ],
      label: "enum : go to back",
    },
    "enum/submit": {
      commands: [
        {
          type: "slot/submit",
          payload: "enum-list",
        },
      ],
      label: "enum : select",
    },
    "enum/escape": {
      commands: [
        {
          payload: {
            direction: "enum.id",
            force: true,
            value: null,
          },
          type: "object/setValue",
        },
      ],
      label: "enum : escape",
    },
  },
};
