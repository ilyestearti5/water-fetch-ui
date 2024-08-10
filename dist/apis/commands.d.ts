declare const _default: {
    data: {
        "camera.take": {
            commands: {
                payload: string[];
                type: string;
            }[];
        };
        "colors-list.back": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "colors-list.next": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "colors-list.submit": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "commands.back": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "commands.close": {
            commands: {
                payload: {
                    direction: string;
                    force: boolean;
                    value: null;
                };
                type: string;
            }[];
            label: string;
        };
        "commands.next": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "commands.open": {
            commands: {
                payload: {
                    direction: string;
                    force: boolean;
                    value: string;
                };
                type: string;
            }[];
            label: string;
        };
        "commands.submit": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "configurations.back": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "configurations.next": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "configurations.settings.layout.submit": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "configurations.settings.layouts.next": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "configurations.settings.layouts.previous": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "configurations.submit": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "defaultCommand.ignore": {
            commands: never[];
            private: boolean;
        };
        "dialog.clickOnButton": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "dialog.escape": {
            commands: {
                payload: string[];
                type: string;
            }[];
            label: string;
        };
        "dialog.goToNextButton": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "dialog.goToPreviousButton": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "feedback/add": {
            commands: {
                payload: string[];
                type: string;
            }[];
            label: string;
        };
        "header.toggle": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "headerNotifays.toggleExpand": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "input.addLineBellow": {
            commands: {
                payload: string[];
                type: string;
            }[];
            label: string;
        };
        "input.completeWord": {
            commands: {
                payload: string[];
                type: string;
            }[];
            label: string;
        };
        "input.selectLine": {
            commands: {
                payload: string[];
                type: string;
            }[];
            label: string;
        };
        "input.tab": {
            commands: {
                payload: string[];
                type: string;
            }[];
            label: string;
        };
        "keyboard/update": {
            commands: {
                payload: string[];
                type: string;
            }[];
        };
        "keyboardShortcuts.focusNextKeyPanding": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "keyboardShortcuts.focusPreviousKeyPanding": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "keyboardShortcuts.submitCurrentKeyPanding": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "menu.back": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "menu.escape": {
            commands: {
                payload: {
                    direction: string;
                    force: boolean;
                    value: null;
                };
                type: string;
            }[];
        };
        "menu.next": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "menu.submit": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "notifays.toggleExpandNotifay": {
            commands: {
                payload: (string | null)[];
                type: string;
            }[];
            label: string;
        };
        "notification.close": {
            commands: {
                payload: {
                    changes: {
                        value: boolean;
                    };
                    id: string;
                }[];
                type: string;
            }[];
            label: string;
        };
        "notification.closeAndExpandLess": {
            commands: (string | {
                payload: {
                    changes: {
                        value: boolean;
                    };
                    id: string;
                }[];
                type: string;
            })[];
            label: string;
        };
        "notification.deleteFocus": {
            commands: {
                payload: string[];
                type: string;
            }[];
            label: string;
        };
        "notification.focusNext": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "notification.focusPrevious": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "notification.open": {
            commands: {
                payload: {
                    changes: {
                        value: boolean;
                    };
                    id: string;
                }[];
                type: string;
            }[];
            label: string;
        };
        "notification.openAndExpandMoreAndFocus": {
            commands: (string | {
                payload: {
                    changes: {
                        value: boolean;
                    };
                    id: string;
                }[];
                type: string;
            } | {
                payload: string[];
                type: string;
            })[];
            label: string;
        };
        "notification.submitCurrent": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "notification.toggle": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
        "search.history.clear": {
            commands: {
                payload: string[];
                type: string;
            }[];
            label: string;
        };
        "settings.colors.show": {
            commands: {
                payload: {
                    changes: {
                        focused: string;
                    };
                    id: string;
                }[];
                type: string;
            }[];
        };
        "settings.focusNext": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "settings.focusPrevious": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "settings.icons.back": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "settings.icons.next": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "settings.icons.show": {
            commands: {
                payload: {
                    changes: {
                        focused: string;
                    };
                    id: string;
                }[];
                type: string;
            }[];
        };
        "settings.icons.submit": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "settings.keyboardShortcuts.show": {
            commands: {
                payload: {
                    changes: {
                        focused: string;
                    };
                    id: string;
                }[];
                type: string;
            }[];
        };
        "settings.tree.expandLess": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "settings.tree.expandMore": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "settings.tree.toggleExpand": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "settings.user.show": {
            commands: {
                payload: {
                    changes: {
                        focused: string;
                    };
                    id: string;
                }[];
                type: string;
            }[];
        };
        "show.submit.setting": {
            commands: {
                payload: (string | null)[];
                type: string;
            }[];
        };
        "string.cancel": {
            commands: {
                payload: string[];
                type: string;
            }[];
            private: boolean;
        };
        "string.change": {
            commands: {
                payload: string[];
                type: string;
            }[];
            private: boolean;
        };
        "tools.tip.click": {
            commands: {
                payload: string[];
                type: string;
            }[];
        };
        "view.leftSide.close": {
            commands: {
                payload: {
                    changes: {
                        value: boolean;
                    };
                    id: string;
                }[];
                type: string;
            }[];
            label: string;
        };
        "view.leftSide.open": {
            commands: {
                payload: {
                    changes: {
                        value: boolean;
                    };
                    id: string;
                }[];
                type: string;
            }[];
        };
        "view.leftSide.toggle": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "view.rightSide.close": {
            commands: {
                payload: {
                    changes: {
                        value: boolean;
                    };
                    id: string;
                }[];
                type: string;
            }[];
        };
        "view.rightSide.open": {
            commands: {
                payload: {
                    changes: {
                        value: boolean;
                    };
                    id: string;
                }[];
                type: string;
            }[];
        };
        "view.rightSide.toggle": {
            commands: {
                payload: string;
                type: string;
            }[];
        };
        "view.settings.hide": {
            commands: {
                payload: {
                    changes: {
                        value: boolean;
                    };
                    id: string;
                }[];
                type: string;
            }[];
            label: string;
        };
        "view.settings.show": {
            commands: ({
                payload: {
                    changes: {
                        value: boolean;
                    };
                    id: string;
                }[];
                type: string;
            } | {
                payload: {
                    changes: {
                        value: string;
                    };
                    id: string;
                }[];
                type: string;
            } | {
                payload: string[];
                type: string;
            })[];
            label: string;
        };
        "view.settings.update.hide": {
            commands: ({
                payload: {
                    direction: string;
                    force: boolean;
                    value: null;
                };
                type: string;
            } | {
                payload: string[];
                type: string;
            })[];
            label: string;
        };
        "window.toggleMode": {
            commands: {
                payload: string;
                type: string;
            }[];
            label: string;
        };
    };
};
export default _default;
