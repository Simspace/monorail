import { FC } from 'react';
import { CollapsibleProps } from '@monorail/visualComponents/collapsible/Collapsible';
declare type AccordionContent = Array<CollapsibleProps & {
    key: string;
}>;
declare type Props = {
    content: AccordionContent;
    multiExpand?: boolean;
    isContentScrollable?: boolean;
};
/**
 * Accordion
 *
 * @param content       - an array of collapsible props with keys to use for the internal state
 * @param multiExpand?  - whether or not multiple collapsible sections can be expanded at the same time or not
 * @param cssOverrides? - any css overrides
 */
export declare const Accordion: FC<Props>;
export {};
//# sourceMappingURL=Accordion.d.ts.map