import * as React from 'react';
declare type widthUnit = number | string;
export interface SkeletonParagraphProps {
    prefixCls?: string;
    className?: string;
    style?: object;
    width?: widthUnit | Array<widthUnit>;
    rows?: number;
}
declare const Paragraph: (props: SkeletonParagraphProps) => React.JSX.Element;
export default Paragraph;
