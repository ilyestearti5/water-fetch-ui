export default {
  data: [
    {
      command: "dialog.goToNextButton",
      value: "arrowdown",
      when: "state.object.data.dialog.id",
    },
    {
      command: "dialog.goToNextButton",
      value: "arrowright",
      when: "state.object.data.dialog.id",
    },
    {
      command: "dialog.goToPreviousButton",
      value: "arrowleft",
      when: "state.object.data.dialog.id",
    },
    {
      command: "dialog.goToPreviousButton",
      value: "arrowup",
      when: "state.object.data.dialog.id",
    },
    {
      command: "dialog.escape",
      value: "escape",
      when: "state.object.data.dialog.id",
    },
    {
      command: "dialog.clickOnButton",
      value: "enter",
      when: "state.object.data.dialog.id",
    },
    {
      command: "dialog.clickOnButton",
      value: "space",
      when: "state.object.data.dialog.id",
    },
    {
      command: "settings.colors.show",
      value: "control+shift+c",
      when: "state.views.entities.settings.focused == 'colors'",
    },
    {
      command: "menu.next",
      when: "state.object.data.menu.id",
      value: "arrowdown",
    },
    {
      command: "menu.back",
      when: "state.object.data.menu.id",
      value: "arrowup",
    },
    {
      command: "menu.submit",
      when: "state.object.data.menu.id",
      value: "enter",
    },
    {
      command: "menu.escape",
      when: "state.object.data.menu.id",
      value: "escape",
    },
    {
      value: "tab",
      command: "input.completeWord",
      when: "state.object.data.input.focusedHasProposition",
      type: "up",
    },
    {
      value: "tab",
      command: "defaultCommand.ignore",
      when: "state.object.data.input.focusedHasProposition",
    },
    {
      value: "tab",
      command: "input.tab",
      when: "state.object.data.input.supportTab",
    },
    {
      value: "control+l",
      command: "input.selectLine",
      when: "focused",
    },
    {
      value: "shift+alt+arrowdown",
      command: "input.addLineBellow",
      when: "focused",
    },
    {
      command: "string.change",
      when: "focused && state.fields.ids.includes(focused + ':input')",
      value: "enter",
    },
    {
      command: "string.cancel",
      when: "focused && state.fields.ids.includes(focused + ':input')",
      value: "escape",
    },
    {
      when: "focused == 'feedback' && state.fields.entities['feedback']?.value",
      command: "feedback/add",
      value: "control+enter",
      private: true,
    },
    {
      command: "commands.next",
      when: "focused == 'cmds/list' || focused == 'findCommand'",
      value: "arrowdown",
    },
    {
      command: "commands.back",
      when: "focused == 'cmds/list' || focused == 'findCommand'",
      value: "arrowup",
    },
    {
      command: "commands.submit",
      when: "focused == 'cmds/list' || focused == 'findCommand'",
      value: "enter",
    },
    {
      repeation: false,
      command: "activity.focus",
      value: "alt",
      when: "focused != 'activity'",
    },
    {
      command: "activity.views.back",
      value: "arrowup",
      when: "focused == 'activity'",
    },
    {
      command: "activity.views.back",
      value: "arrowleft",
      when: "focused == 'activity'",
    },
    {
      command: "activity.views.next",
      value: "arrowdown",
      when: "focused == 'activity'",
    },
    {
      command: "activity.views.next",
      value: "arrowright",
      when: "focused == 'activity'",
    },
    {
      repeation: false,
      command: "activity.views.submit",
      value: "enter",
      when: "focused == 'activity'",
    },
    {
      command: "commands.open",
      when: "focused != 'findCommand' || !state.object.data.commandId",
      value: "control+shift+p",
    },
    {
      repeation: false,
      command: "notification.openAndExpandMoreAndFocus",
      when: "focused != 'notifications'",
      value: "shift+alt+n",
    },
    {
      command: "view.activity.toggle",
      value: "control+alt+a",
    },
    {
      command: "view.leftSide.toggle",
      value: "control+b",
    },
    {
      command: "view.rightSide.toggle",
      value: "control+alt+b",
    },
    {
      command: "view.settings.show",
      when: "focused != 'findConfigurations-local' || !state.settings.entities['visibility/configurations.boolean']?.value",
      value: "control+,",
    },
    {
      repeation: false,
      command: "settings.keyboardShortcuts.show",
      when: "state.settings.entities['visibility/configurations.boolean']?.value",
      value: "control+k",
    },
    {
      repeation: false,
      command: "settings.user.show",
      when: "state.settings.entities['visibility/configurations.boolean']?.value",
      value: "control+u",
    },
    {
      repeation: false,
      command: "settings.icons.show",
      when: "state.settings.entities['visibility/configurations.boolean']?.value",
      value: "control+i",
    },
    {
      command: "layout.zoom.in",
      value: "control+=",
    },
    {
      command: "layout.zoom.in",
      value: "control+plus",
    },
    {
      command: "layout.zoom.out",
      value: "control+-",
    },
    {
      command: "layout.zoom.reset",
      value: "control+0",
    },
    {
      repeation: false,
      command: "keyboardShortcuts.submitCurrentKeyPanding",
      value: "enter",
      when: "['findConfigurations-local','keyboardShortcuts'].includes(focused) && state.views.entities.settings.focused == 'keyboardShortcuts'",
    },
    {
      command: "keyboard/update",
      value: "f2",
      when: "['findConfigurations-local','keyboardShortcuts'].includes(focused) && state.views.entities.settings.focused == 'keyboardShortcuts'",
    },
    {
      command: "keyboardShortcuts.focusNextKeyPanding",
      value: "arrowdown",
      when: "['findConfigurations-local','keyboardShortcuts'].includes(focused) && state.views.entities.settings.focused == 'keyboardShortcuts'",
    },
    {
      command: "keyboardShortcuts.focusPreviousKeyPanding",
      value: "arrowup",
      when: "['findConfigurations-local','keyboardShortcuts'].includes(focused) && state.views.entities.settings.focused == 'keyboardShortcuts'",
    },
    {
      value: "arrowdown",
      command: "colors-list-next",
      when: "['findConfigurations-local','color-list'].includes(focused) && state.views.entities.settings.focused == 'colors'",
    },
    {
      value: "arrowup",
      command: "colors-list-back",
      when: "['findConfigurations-local','color-list'].includes(focused) && state.views.entities.settings.focused == 'colors'",
    },
    {
      value: "enter",
      command: "colors-list-submit",
      when: "['findConfigurations-local','color-list'].includes(focused) && state.views.entities.settings.focused == 'colors'",
    },
    {
      command: "savePanel.open",
      value: "control+s",
      when: "focused != 'savePanelView'",
    },
    {
      command: "savePanel.next",
      value: "arrowdown",
      when: "focused == 'savePanelView'",
    },
    {
      command: "savePanel.back",
      value: "arrowup",
      when: "focused == 'savePanelView'",
    },
    {
      command: "savePanel.close",
      value: "backspace",
      when: "state.settings.entities['visibility/savePanel.boolean']?.value",
    },
    {
      command: "savePanel.toggleCheckedSubmit",
      value: "space",
      when: "focused == 'savePanelView'",
    },
    {
      command: "savePanel.toggleCheckedSubmit",
      value: "enter",
      when: "focused == 'savePanelView'",
    },
    {
      command: "configurations.next",
      value: "arrowdown",
      when: "focused == 'findConfigurations-local' && state.views.entities.settings.focused == 'user'",
    },
    {
      command: "configurations.back",
      value: "arrowup",
      when: "focused == 'findConfigurations-local' && state.views.entities.settings.focused == 'user'",
    },
    {
      repeation: false,
      command: "configurations.submit",
      value: "enter",
      when: "focused == 'findConfigurations-local' && state.views.entities.settings.focused == 'user'",
    },
    {
      command: "setup.nextPage",
      when: "!state.object.data.setup.user.inited && (!focused || ['setup-controller','setup.btn.previous','setup.btn.next'].includes(focused))",
      value: "arrowright",
    },
    {
      command: "setup.previousPage",
      when: "!state.object.data.setup.user.inited && (!focused || ['setup-controller','setup.btn.previous','setup.btn.next'].includes(focused))",
      value: "arrowleft",
    },
    {
      command: "savePanel.save",
      when: "state.settings.entities['visibility/savePanel.boolean']?.value",
      value: "control+enter",
    },
    {
      command: "notification.submitCurrent",
      when: "focused == 'notifications'",
      value: "enter",
    },
    {
      command: "notification.focusNext",
      when: "focused == 'notifications'",
      value: "arrowdown",
    },
    {
      command: "notification.focusPrevious",
      when: "focused == 'notifications'",
      value: "arrowup",
    },
    {
      command: "notification.deleteFocus",
      when: "focused == 'notifications'",
      value: "delete",
    },
    {
      command: "notifays.toggleExpandNotifay",
      when: "focused == 'notifications'",
      value: "space",
    },
    {
      command: "enum/next",
      value: "arrowdown",
      when: "state.object.data.enum.id",
    },
    {
      command: "enum/next",
      value: "arrowright",
      when: "state.object.data.enum.id",
    },
    {
      command: "enum/back",
      value: "arrowleft",
      when: "state.object.data.enum.id",
    },
    {
      command: "enum/back",
      value: "arrowup",
      when: "state.object.data.enum.id",
    },
    {
      repeation: false,
      command: "enum/submit",
      value: "space",
      when: "!state.object.data.enumIsLoading && state.object.data.enum.id",
    },
    {
      repeation: false,
      command: "enum/submit",
      value: "enter",
      when: "!state.object.data.enumIsLoading && state.object.data.enum.id",
    },
    {
      repeation: false,
      command: "enum/escape",
      value: "escape",
      when: "state.object.data.enum.id",
    },
    {
      repeation: false,
      command: "show.submit.setting",
      value: "f2",
      when: "focused == 'findConfigurations-local'",
    },
    {
      command: "commands.close",
      when: "state.object.data.commandId",
      value: "escape",
    },
    {
      repeation: false,
      command: "activity.escape",
      value: "escape",
      when: "focused == 'activity'",
    },
    {
      command: "savePanel.close",
      value: "escape",
      repeation: false,
      when: "state.settings.entities['visibility/savePanel.boolean']?.value",
    },
    {
      command: "userProfile.hide",
      value: "escape",
      repeation: false,
      when: "state.settings.entities['visibility/profile.boolean']?.value",
    },
    {
      command: "view.settings.update.hide",
      when: "state.object.data.view.settings",
      value: "escape",
    },
    {
      command: "view.settings.hide",
      when: "state.settings.entities['visibility/configurations.boolean']?.value",
      value: "escape",
    },
    {
      repeation: false,
      command: "creditBox.close",
      when: "state.object.data.visibility.credit",
      value: "escape",
    },
    {
      repeation: false,
      command: "notification.closeAndExpandLess",
      when: "state.settings.entities['visibility/notifays.boolean']?.value",
      value: "escape",
    },
    {
      command: "configurations.settings.layouts.next",
      when: "focused == 'settings.layouts'",
      value: "arrowright",
    },
    {
      command: "configurations.settings.layouts.previous",
      when: "focused == 'settings.layouts'",
      value: "arrowleft",
    },
    {
      command: "configurations.settings.layout.submit",
      when: "focused == 'settings.layouts'",
      value: "enter",
    },
    {
      when: "focused == 'settings.tree.view'",
      value: "space",
      command: "settings.tree.toggleExpand",
    },
    {
      when: "focused == 'settings.tree.view'",
      value: "arrowright",
      command: "settings.tree.expandMore",
    },
    {
      when: "focused == 'settings.tree.view'",
      value: "arrowleft",
      command: "settings.tree.expandLess",
    },
    {
      command: "header.toggle",
      value: "control+h",
    },
    {
      command: "settings.icons.next",
      when: "['findConfigurations-local','icons-list'].includes(focused) && state.views.entities.settings.focused == 'icons'",
      value: "arrowdown",
    },
    {
      command: "settings.icons.back",
      when: "['findConfigurations-local','icons-list'].includes(focused) && state.views.entities.settings.focused == 'icons'",
      value: "arrowup",
    },
    {
      command: "settings.icons.submit",
      when: "['findConfigurations-local','icons-list'].includes(focused) && state.views.entities.settings.focused == 'icons'",
      value: "enter",
    },
    {
      command: "camera-take",
      value: "enter",
      when: "state.object.data?.camera?.id",
    },
    {
      command: "window.toggleMode",
      value: "control+d",
    },
  ],
};
