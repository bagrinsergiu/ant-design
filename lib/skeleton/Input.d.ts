import * as React from 'react';
import { SkeletonElementProps } from './Element';
export interface SkeletonInputProps extends Omit<SkeletonElementProps, 'size' | 'shape'> {
    size?: 'large' | 'small' | 'default';
}
declare const SkeletonInput: {
    (props: SkeletonInputProps): React.JSX.Element;
    defaultProps: {
        size: string;
    };
};
export default SkeletonInput;
