import { FC, ReactElement } from 'react';
import { Colors } from '@monorail/helpers/exports';
export declare type CarouselChildrenProps = {
    loop: boolean;
    nextSlide: () => void;
    prevSlide: () => void;
    currentSlide: number;
    totalSlides: number;
    content: ReactElement;
};
declare type Props = {
    indicatorDots?: boolean;
    dotColor?: Colors;
    slides: Array<ReactElement>;
    loop?: boolean;
    autoPlay?: boolean;
    timerInterval?: number;
    children: (props: CarouselChildrenProps) => ReactElement;
};
export declare const Carousel: FC<Props>;
export {};
//# sourceMappingURL=Carousel.d.ts.map