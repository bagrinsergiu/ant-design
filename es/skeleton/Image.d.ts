import * as React from 'react';
import { SkeletonElementProps } from './Element';
export interface SkeletonImageProps extends Omit<SkeletonElementProps, 'size' | 'shape' | 'active'> {
}
declare const SkeletonImage: (props: SkeletonImageProps) => React.JSX.Element;
export default SkeletonImage;
