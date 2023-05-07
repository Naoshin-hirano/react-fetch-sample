import React, { useCallback, useEffect, useState } from "react";
import { ReactMarkdown } from "./ReactMarkdown";
import UserAgent from "user-agents";

export const RepositoryReadme = ({ repo, login }: any) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [markdown, setMarkdown] = useState<any>();
    const userAgent = new UserAgent();

    const loadReadme = useCallback(async (login: any, repo: any) => {
        setLoading(true);
        const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
        const { download_url } = await fetch(uri, {
            headers: {
                "User-Agent": userAgent.toString(),
            },
        }).then((res) => {
            return res.json();
        });
        const markdown = await fetch(download_url).then((res) => {
            return res.text();
        });
        setMarkdown(markdown);
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!repo || !login) return;
        loadReadme(login, repo).catch(setError);
    }, [repo]);

    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (loading) return <p>Loading...</p>;
    return <ReactMarkdown source={markdown} />;
};
