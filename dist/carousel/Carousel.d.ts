import { ReactElement, FC } from 'react';
export declare type CarouselChildrenProps = {
    nextSlide: () => void;
    prevSlide: () => void;
    currentSlide: number;
    totalSlides: number;
    content: ReactElement;
};
declare type Props = {
    slides: Array<ReactElement>;
    children: (props: CarouselChildrenProps) => ReactElement;
};
export declare const Carousel: FC<Props>;
export {};
