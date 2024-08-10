interface ViewPageProps {
    views: Partial<Record<string, () => JSX.Element>>;
    viewId: string;
}
export declare function ViewPage({ views, viewId }: ViewPageProps): import("react/jsx-runtime").JSX.Element;
export {};
