/// <reference types="react" />
import * as MUI from '@material-ui/core';
import { OmitBannedProps } from '@monorail/v2/shared/helpers';
export declare const StyledTextField: import("styled-components").StyledComponent<typeof TextField, import("../../../helpers/theme").GlobalAppThemeInterface, {}, never>;
declare type TextFieldMonorailProps = {};
export declare function TextField(props: TextFieldMonorailProps & OmitBannedProps<MUI.TextFieldProps>): JSX.Element;
export {};
