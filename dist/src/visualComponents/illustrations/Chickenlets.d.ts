import { AriaAttributes, SVGAttributes } from 'react';
import { CustomIconProps } from '@monorail/exports';
export interface ChickenletsProps extends AriaAttributes, CustomIconProps, Omit<SVGAttributes<SVGElement>, 'onClick' | 'color'> {
}
export declare const Chickenlets: ({ ...props }: ChickenletsProps) => JSX.Element;
