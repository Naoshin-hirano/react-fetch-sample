import React from "react";
import { useIterator } from "../Hooks/useIterator";
import { RepositoryReadme } from "./RepositoryReadme";

export const RepoMenu = ({ repository, login }: any) => {
    const [{ name }, previous, next] = useIterator(repository);
    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={previous}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
            <RepositoryReadme login={login} repo={name} />
        </>
    );
};
