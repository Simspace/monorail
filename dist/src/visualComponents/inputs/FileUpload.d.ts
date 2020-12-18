import React, { FC } from 'react';
import * as O from 'fp-ts/lib/Option';
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare enum FileType {
    AnyImage = 0,
    PNG = 1,
    JPG = 2,
    WordDoc = 3,
    PDF = 4,
    PlainText = 5,
    VirtualAppliance = 6,
    Yaml = 7,
    Excel = 8,
    Json = 9
}
export declare type InputProps = {
    onChange: (file: O.Option<File>) => void;
    name?: string;
    required?: boolean;
    accept?: Array<FileType>;
};
export declare const HiddenSingleFileInput: (props: InputProps & {
    inputRef: React.RefObject<HTMLInputElement>;
}) => JSX.Element;
export declare type FileUploadProps = {
    value?: File;
    buttonType?: ButtonDisplay;
    label?: string;
    iconLeft?: IconType;
    showFilename?: boolean;
} & InputProps;
export declare const FileUpload: FC<FileUploadProps>;
