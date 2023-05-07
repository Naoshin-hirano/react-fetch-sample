import { useEffect, useState } from "react";
import UserAgent from "user-agents";

export const useFetch = (uri: string) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState(true);
    const userAgent = new UserAgent();

    useEffect(() => {
        if (!uri) return;
        fetch(uri, {
            headers: {
                "User-Agent": userAgent.toString(),
            },
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
