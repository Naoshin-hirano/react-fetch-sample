import React from "react";
import { useFetch } from "../Hooks/useFetch";

export const Fetch = ({
    uri,
    renderSuccess,
    loadingFallback = <p>loading...</p>,
    renderError = (error: any) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}: any) => {
    const { loading, data, error } = useFetch(uri);
    if (error) return renderError;
    if (loading) return loadingFallback;
    if (data) return renderSuccess({ data });
};
