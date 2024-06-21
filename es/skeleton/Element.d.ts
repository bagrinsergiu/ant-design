import * as React from 'react';
export interface SkeletonElementProps {
    prefixCls?: string;
    className?: string;
    style?: object;
    size?: 'large' | 'small' | 'default' | number;
    shape?: 'circle' | 'square' | 'round';
    active?: boolean;
}
declare const Element: (props: SkeletonElementProps) => React.JSX.Element;
export default Element;
