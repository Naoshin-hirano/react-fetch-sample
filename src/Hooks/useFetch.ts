import { useEffect, useState } from "react";
import { header } from "../Utils/util";
import { useMountedRef } from "./useMountedRef";

export const useFetch = (uri: string) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState(true);
    // DOMがマウントされているかの判定
    const mounted = useMountedRef();

    useEffect(() => {
        if (!uri) return;
        if (!mounted.current) return;
        setLoading(true);
        fetch(uri, header)
            .then((data) => {
                // DOMがアンマウントされていたらfetchをキャンセル
                if (!mounted.current)
                    throw new Error("Component is not mounted");
                return data;
            })
            .then((data) => data.json())
            .then((data) => setData(data))
            .then(() => setLoading(false))
            .catch((error) => {
                setError(error);
            });
    }, [uri]);

    return { loading, data, error };
};
