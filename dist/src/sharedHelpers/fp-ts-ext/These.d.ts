import { ModifyF, Prism, Traversal } from 'monocle-ts';
import * as Th from 'fp-ts/lib/These';
export * from 'fp-ts/lib/These';
/**
 * A Prism to select the Left constructor of a These
 */
export declare const getLeftPrism: <E, A>() => Prism<Th.These<E, A>, E>;
/**
 * A Prism to select the Right constructor of a These
 */
export declare const getRightPrism: <E, A>() => Prism<Th.These<E, A>, A>;
/**
 * A Prism to select the Both constructor of a These
 */
export declare const getBothPrism: <E, A>() => Prism<Th.These<E, A>, [E, A]>;
/**
 * A ModifyF function for the E value of a These (including Left and Both)
 *
 * This allows you to apply an effectful function to modify an E value, whether it's in the Left or Both E slot
 */
export declare const getEModifyF: <E, A>() => ModifyF<Th.These<E, A>, E>;
/**
 * Traversal for the E value of a These (including Left and Both)
 *
 * This is an optic for "traversing" the E value of a These<E, A>, whether it's in the Left or Both slot.
 */
export declare const getETraversal: <E, A>() => Traversal<Th.These<E, A>, E>;
/**
 * A ModifyF function for the A value of a These (including Right and Both)
 *
 * This allows you to apply an effectful function to modify an A value, whether it's in the Right or Both A slot
 */
export declare const getAModifyF: <E, A>() => ModifyF<Th.These<E, A>, A>;
/**
 * Traversal for the A value of a These (including Right and Both)
 *
 * This is an optic for "traversing" the A value of a These<E, A>, whether it's in the Right or Both slot.
 */
export declare const getATraversal: <E, A>() => Traversal<Th.These<E, A>, A>;
