import * as React from 'react';
export declare const IconMap: {
    success: React.ForwardRefExoticComponent<Omit<import("@ant-design/icons/lib/components/AntdIcon").AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    error: React.ForwardRefExoticComponent<Omit<import("@ant-design/icons/lib/components/AntdIcon").AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    info: React.ForwardRefExoticComponent<Omit<import("@ant-design/icons/lib/components/AntdIcon").AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    warning: React.ForwardRefExoticComponent<Omit<import("@ant-design/icons/lib/components/AntdIcon").AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
};
export declare const ExceptionMap: {
    '404': () => React.JSX.Element;
    '500': () => React.JSX.Element;
    '403': () => React.JSX.Element;
};
export declare type ExceptionStatusType = 403 | 404 | 500 | '403' | '404' | '500';
export declare type ResultStatusType = ExceptionStatusType | keyof typeof IconMap;
export interface ResultProps {
    icon?: React.ReactNode;
    status?: ResultStatusType;
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
    extra?: React.ReactNode;
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
}
export interface ResultType extends React.FC<ResultProps> {
    PRESENTED_IMAGE_404: React.ReactNode;
    PRESENTED_IMAGE_403: React.ReactNode;
    PRESENTED_IMAGE_500: React.ReactNode;
}
declare const Result: ResultType;
export default Result;
