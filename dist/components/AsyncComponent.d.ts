export interface AsyncComponentProps {
    render: () => Promise<JSX.Element>;
    error?: JSX.Element;
    loading?: JSX.Element;
    deps?: any[];
}
export declare function AsyncComponent({ render, error, deps, loading }: AsyncComponentProps): import("react/jsx-runtime").JSX.Element;
