import React, { useCallback, useEffect, useState } from "react";
import { ReactMarkdown } from "./ReactMarkdown";
import { header } from "../Utils/util";
import { useMountedRef } from "../Hooks/useMountedRef";

export const RepositoryReadme = ({ repo, login }: any) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [markdown, setMarkdown] = useState<any>();

    // DOMがマウントされているかの判定
    const mounted = useMountedRef();

    const loadReadme = useCallback(async (login: any, repo: any) => {
        setLoading(true);
        const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
        const { download_url } = await fetch(uri, header).then((res) => {
            return res.json();
        });
        const markdown = await fetch(download_url).then((res) => {
            return res.text();
        });
        // 通信状態が悪く、DOMがアンマウントされていればstateは呼び出さない
        if (mounted.current) {
            setMarkdown(markdown);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!repo || !login) return;
        loadReadme(login, repo).catch(setError);
    }, [repo]);

    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (loading) return <p>Loading...</p>;
    return <ReactMarkdown source={markdown} />;
};
