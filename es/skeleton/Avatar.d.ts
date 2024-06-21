import * as React from 'react';
import { SkeletonElementProps } from './Element';
export interface AvatarProps extends Omit<SkeletonElementProps, 'shape'> {
    shape?: 'circle' | 'square';
}
declare const SkeletonAvatar: {
    (props: AvatarProps): React.JSX.Element;
    defaultProps: {
        size: string;
        shape: string;
    };
};
export default SkeletonAvatar;
