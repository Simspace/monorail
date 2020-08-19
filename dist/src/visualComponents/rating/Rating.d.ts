import React from 'react';
export declare enum Size {
    Tiny = "10",
    Small = "16",
    Medium = "24",
    Large = "32"
}
export declare enum Fill {
    Black = "#000000",
    Gold = "#FFC107",
    Grey = "#DADADA"
}
declare type StarIcon = 'star_outline' | 'star_half' | 'star_filled';
export declare const getRatingIcons: (rating: number) => Array<[number, StarIcon]>;
declare type Props = {
    rating: number;
    size?: Size;
    fill?: Fill;
    interactFill?: Fill;
    spreadOut?: boolean;
    onClickRating?: (value: number) => void;
};
export declare const Rating: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export {};
//# sourceMappingURL=Rating.d.ts.map