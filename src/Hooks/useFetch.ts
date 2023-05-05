import { useEffect, useState } from "react";

export const useFetch = (uri: string) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!uri) return;
        fetch(uri)
            .then((data) => data.json())
            .then((data) => setData(data))
            .then(() => setLoading(false))
            .catch((error) => {
                setError(error);
            });
    }, [uri]);

    return { loading, data, error };
};
