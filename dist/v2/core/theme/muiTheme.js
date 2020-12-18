"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMuiThemeFromSc = void 0;

var _core = require("@material-ui/core");

// eslint-disable-next-line no-restricted-imports
const fontFamily = `'Gotham SSm A', 'Gotham SSm B', -apple-system, BlinkMacSystemFont,'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`;
const LIST_ITEM_INSET = 28;

const createMuiThemeFromSc = themeSC => {
  const theme = themeSC.v2;
  const overrides = makeMuiOverrides(theme);
  return (0, _core.createMuiTheme)({
    /**
     * Material uses inheritence for some components, such as MuiButtonBase. In order to provide our desired defaults
     * for props/styles across all usages (direct or indirect), we cannot simply provide them as defaults in our
     * re-export layer; we provide those defaults here.
     *
     * In order to minimize variation, we try to lock into as few visual variations of MUI as we can and ban usage
     * visual-only MUI features, such as "size"/"color"/"variant". We make exceptions when the visual variations of MUI
     * are feature-significant.
     *
     * DS 2020-09-12
     */
    props: {
      MuiSvgIcon: {
        fontSize: 'inherit' // shapeRendering: 'crispedges', // Unsure which looks better, on or off? -DS 2020-09-14

      },
      MuiButtonBase: {
        disableRipple: true
      },
      // MUI Lists do weird things with <ul>/<li>, wrong usage of `role` and invalid list elements (div, hr). Here we
      // default to divs and wrap everything in <li> in the shim layer.
      MuiListItem: {
        // @ts-ignore -- Bad MUI types: `component` is valid but causes TSC issues.
        component: 'div'
      }
    },
    palette: {
      action: {
        disabled: undefined
      }
    },
    overrides: {
      MuiInputAdornment: overrides.MuiInputAdornment,
      MuiInputBase: overrides.MuiInputBase,
      MuiOutlinedInput: overrides.MuiOutlinedInput,
      MuiInputLabel: overrides.MuiInputLabel,
      MuiFormHelperText: overrides.MuiFormHelperText,
      MuiButtonBase: overrides.MuiButtonBase,
      MuiButton: overrides.MuiButton,
      MuiPaper: overrides.MuiPaper,
      MuiIconButton: overrides.MuiIconButton,
      MuiLink: overrides.MuiLink,
      MuiChip: overrides.MuiChip,
      MuiDialog: overrides.MuiDialog,
      MuiExpansionPanelSummary: overrides.MuiExpansionPanelSummary,
      MuiList: overrides.MuiList,
      MuiListItem: overrides.MuiListItem,
      MuiListItemIcon: overrides.MuiListItemIcon,
      MuiListItemText: overrides.MuiListItemText,
      MuiListItemSecondaryAction: overrides.MuiListItemSecondaryAction,
      MuiListSubheader: overrides.MuiListSubheader,
      MuiSlider: overrides.MuiSlider
    },
    typography: {
      fontFamily
    }
  });
}; // #region MUI Overrides


exports.createMuiThemeFromSc = createMuiThemeFromSc;

const makeMuiOverrides = theme => {
  const sharedButtonStyles = {
    fontSize: 11,
    lineHeight: '16px',
    padding: 0,
    color: theme.FoundationPlate,
    fontWeight: 700
  };
  const MuiPaper = {
    root: {
      // Needed for non-Mui texts, which show the font from typography.scss
      fontFamily,
      letterSpacing: 'initial',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    }
  };
  const MuiIconButton = {
    root: { ...sharedButtonStyles,
      '&:hover': {
        backgroundColor: undefined
      }
    }
  };
  const MuiButton = {
    text: {
      padding: '3px 11px'
    },
    root: { ...sharedButtonStyles,
      height: 24,
      '&.Mui-disabled': {
        opacity: 0.6
      },
      '&:hover': {
        backgroundColor: undefined
      }
    }
  };
  const MuiInputAdornment = {
    root: {
      fontSize: 16
    }
  };
  const MuiInputBase = {
    adornedStart: {
      paddingLeft: 8
    },
    adornedEnd: {
      paddingRight: 8
    },
    input: {
      padding: '4px 6px',
      fontSize: 11,
      letterSpacing: undefined,
      height: 24,
      boxSizing: 'border-box',
      '&::placeholder': {
        fontStyle: 'italic'
      }
    }
  };
  const MuiOutlinedInput = {
    adornedStart: {
      paddingLeft: undefined
    },
    adornedEnd: {
      paddingRight: undefined
    },
    input: {
      padding: undefined
    },
    root: {
      '&$focused $notchedOutline': {
        borderColor: theme.ActionPrimary,
        borderWidth: 1
      },
      '&:hover $notchedOutline': {
        borderColor: theme.FoundationText3
      }
    },
    notchedOutline: {
      transition: 'border 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
      borderColor: theme.FoundationDash
    }
  };
  const MuiInputLabel = {
    // Disable outlined label-shrink styles
    shrink: {
      transform: undefined
    },
    outlined: {
      transform: undefined,
      pointerEvents: undefined,
      zIndex: undefined,
      // Weird-ass MUI magic
      '&$shrink': {
        transform: undefined
      }
    },
    formControl: {
      position: undefined,
      transform: undefined,
      top: undefined,
      left: undefined
    },
    root: {
      fontWeight: 500,
      fontSize: 11,
      lineHeight: '16px',
      color: theme.FoundationText1,
      marginBottom: '4px',
      '&$focused:not($error)': {
        fontWeight: 500,
        color: theme.ActionPrimary
      }
    }
  };
  const MuiFormHelperText = {
    contained: {
      marginLeft: undefined,
      marginRight: undefined
    },
    root: {
      color: theme.ActionPrimary,
      fontSize: 8,
      lineHeight: '10px'
    }
  };
  const MuiButtonBase = {
    root: {}
  };
  const MuiLink = {
    root: {
      color: theme.ActionPrimary,
      fontWeight: 500,
      '&:hover, &:focus': {
        color: theme.ActionGraphic
      }
    }
  };
  const MuiChip = {
    root: {
      backgroundColor: theme.ActionPrimary,
      color: theme.FoundationPlate,
      height: 16,
      fontWeight: 500
    },
    label: {
      paddingLeft: 8,
      paddingRight: 8
    }
  };
  const MuiDialog = {
    paper: {
      // Needed for non-Mui texts, which show the font from typography.scss
      fontFamily,
      letterSpacing: 'initial',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    }
  };
  const MuiExpansionPanelSummary = {
    root: {
      backgroundColor: 'unset',
      '&:hover, &:focus': {
        backgroundColor: 'unset'
      },
      '&:active': {
        backgroundColor: 'unset'
      }
    }
  };
  const MuiList = {
    root: {},
    subheader: {
      // set bg color so sticky subheader will inherit properly and prevent transparent headers
      backgroundColor: theme.FoundationPlate
    }
  };
  const MuiListItem = {
    root: {
      minHeight: '32px',
      paddingTop: '4px',
      paddingBottom: '4px',
      '&$focusVisible': {
        backgroundColor: theme.ActionPinch
      }
    },
    button: {
      '&:hover': {
        backgroundColor: theme.ActionPinch
      },
      '&:active': {
        backgroundColor: theme.ActionDash
      }
    }
  };
  const MuiListItemIcon = {
    root: {
      fontSize: '16px',
      minWidth: LIST_ITEM_INSET,
      color: theme.FoundationText4
    }
  };
  const MuiListItemText = {
    root: {
      color: theme.FoundationText1,
      // display: flex for text truncation with ellipse
      display: 'flex'
    },
    secondary: {
      color: theme.FoundationText3
    },
    inset: {
      paddingLeft: LIST_ITEM_INSET
    }
  };
  const MuiListItemSecondaryAction = {
    root: {
      color: theme.FoundationText1,
      display: 'flex' // centers items within for better alignment

    }
  };
  const MuiListSubheader = {
    root: {
      color: theme.FoundationText4,
      fontWeight: 700,
      fontSize: '12px'
    }
  };
  const MuiSlider = {
    root: {
      color: theme.ActionPrimary
    },
    rail: {
      height: '4px',
      backgroundColor: theme.FoundationPinch2
    },
    track: {
      height: '4px'
    },
    thumb: {
      height: '12px',
      marginTop: '-4px',
      width: '12px',
      '&$focusVisible': {
        boxShadow: `0px 0px 0px 8px ${theme.Accent3}20`,
        '&$active': {
          boxShadow: `0px 0px 0px 14px ${theme.Accent3}20`
        }
      },
      '&$disabled': {
        marginTop: '-4px',
        height: '12px',
        width: '12px'
      }
    }
  };
  return {
    MuiPaper,
    MuiIconButton,
    MuiButton,
    MuiInputAdornment,
    MuiInputBase,
    MuiOutlinedInput,
    MuiInputLabel,
    MuiFormHelperText,
    MuiButtonBase,
    MuiLink,
    MuiChip,
    MuiDialog,
    MuiExpansionPanelSummary,
    MuiList,
    MuiListItem,
    MuiListItemIcon,
    MuiListItemText,
    MuiListItemSecondaryAction,
    MuiListSubheader,
    MuiSlider
  };
}; // #endregion