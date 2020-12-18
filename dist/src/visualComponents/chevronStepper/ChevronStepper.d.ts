import React from 'react';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare const ChevronStepper: import("styled-components").StyledComponent<"ul", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const Step: import("styled-components").StyledComponent<"li", import("../../helpers/theme").GlobalAppThemeInterface, {
    isActive: boolean;
}, never>;
declare type ChevronStepProps = {
    icon?: IconType;
    isActive?: boolean;
    title: string;
};
export declare const ChevronStep: React.FC<ChevronStepProps>;
export {};
