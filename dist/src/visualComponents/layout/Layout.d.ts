import { MouseEvent, ReactNode, Ref } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { ElevationRange } from '@monorail/helpers/exports';
import { CommonComponentType } from '@monorail/types';
export declare const AppContainer: any;
export declare const PageContent: any;
export declare const SectionContent: any;
export declare type SectionProps = CommonComponentType & {
    hover?: boolean;
    elevation?: ElevationRange;
    onClick?: (event: MouseEvent) => void;
    ref?: Ref<any>;
    cssCardContent?: SimpleInterpolation;
    children?: ReactNode;
    flat?: boolean;
};
export declare const Section: any;
//# sourceMappingURL=Layout.d.ts.map