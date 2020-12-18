import { Colors } from '@monorail/helpers/color';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare enum AlertLevel {
    Info = "info",
    Success = "success",
    Error = "error",
    Warning = "warning"
}
export declare const AlertColors: {
    info: Colors;
    success: Colors;
    error: Colors;
    warning: Colors;
};
export declare const AlertIcons: Record<AlertLevel, IconType>;
