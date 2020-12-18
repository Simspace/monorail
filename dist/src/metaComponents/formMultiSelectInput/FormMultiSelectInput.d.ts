/// <reference types="react" />
import { FormMultiSelectInputProps } from './FormMultiSelectInput.types';
/**
 * Provides the functionality behind creating an input of some kind that will
 * filter a set of suggestions or can be used to create new values by pressing
 * the 'Enter' key. Multiple UIs have been mentioned by design, so this
 * defers UI concerns to render props to leave it open for extension.
 *
 * It has been attempted to try to satisfy the Open-Closed Principle - the "O" in SOLID -
 * to make it easy enough to build forms with multiple UI variants with the same
 * multi-select functionality.
 *
 * @example
 * <section css={containerCss}>
 * --------------------------
 * |  renderSelectedOptions |
 * --------------------------
 * |  renderInput           |
 * --------------------------
 * |  renderSuggestions     |
 * --------------------------
 * </section>
 */
export declare function FormMultiSelectInput<A>(props: FormMultiSelectInputProps<A>): JSX.Element;
