import { Annotations, Args, Args as DefaultArgs } from '@storybook/addons';
import { ArgTypes as StorybookArgTypes, Meta as StorybookMeta, Parameters as StorybookParameters, Story as StorybookStory } from '@storybook/react';
declare type A11yParameter = {
    a11y?: {
        element?: A11yElement | string;
        disable?: boolean;
    };
};
declare type A11yParameters = {
    parameters?: A11yParameter;
};
declare type GeneratedMeta = Annotations<Args, void>;
export declare type Meta = StorybookMeta & A11yParameters;
export declare type Story<Args = DefaultArgs> = StorybookStory<Partial<Args>> & A11yParameters;
export declare const NO_GENERATED_META: GeneratedMeta;
/**
 * Selectors used by a11y tools to target specific elements for a11y checks
 */
export declare enum A11yElement {
    /**
     * `Root` is the default. Only use it when overriding a non-default selector.
     */
    Root = "#root",
    Component = "#root > *",
    Modal = ".MuiDialog-root",
    Popover = ".MuiPopover-root",
    Drawer = ".MuiDrawer-root"
}
export declare const DISABLED_CONTROLS: {
    readonly controls: {
        readonly disable: true;
    };
};
export declare const DISABLED_ACTIONS: {
    readonly actions: {
        readonly disable: true;
    };
};
export declare const ENABLED_ACTIONS: {
    readonly actions: {
        readonly disable: false;
    };
};
export declare const DISABLED_A11Y: {
    readonly a11y: {
        readonly disable: true;
    };
};
export declare const DISABLED_ARG_TYPE: {
    readonly table: {
        readonly disable: true;
    };
};
export declare const PADDING_REMOVED: {
    readonly layout: "fullscreen";
};
/**
 * This is the default a11y selector. Only use it when overriding a custom selector.
 */
export declare const A11Y_ELEMENT__ROOT: {
    a11y: {
        element: A11yElement;
    };
};
export declare const A11Y_ELEMENT__COMPONENT: {
    a11y: {
        element: A11yElement;
    };
};
declare type StoryConfiguration<T> = {
    args?: Partial<T>;
    argTypes?: StorybookArgTypes;
    parameters?: StorybookParameters & A11yParameter;
    storyName?: string;
};
/**
 * Helper function for creating a story from a Template.
 * Also handy for creating new stories from a normal component.
 * - Storybook's documented approach of manually adding configuration as properties to the Story is tedious and error-prone.
 *
 * @param Template A renderable Template or Component
 * @param config Properties added to the returned Story
 *
 * @example using Template:
 * export const Disabled = story(BasicTemplate, { args: { disabled: true }})
 *
 * @example using a component:
 * export const Other = story(() => <div />, { storyName: "Example"})
 *
 */
export declare function story<T extends DefaultArgs>(Template: Story<T>, { args, argTypes, parameters, storyName }?: StoryConfiguration<T>): Story<T>;
/**
 * Creates a Meta object used for the default export of a stories file
 *
 * @example
 * export default meta(require('./meta.json'), {title: 'Component'})
 *
 * @example
 * export default meta(NO_GENERATED_META, {title: 'Component'})
 */
export declare function meta(generatedMeta: GeneratedMeta, meta: Meta): Meta;
export {};
