import * as React from 'react';
export interface LoadingIconProps {
    prefixCls: string;
    existIcon: boolean;
    loading?: boolean | object;
}
export default function LoadingIcon({ prefixCls, loading, existIcon }: LoadingIconProps): React.JSX.Element;
