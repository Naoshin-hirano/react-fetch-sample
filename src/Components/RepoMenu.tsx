import React from "react";
import { useEffect } from "react";
import { useIterator } from "../Hooks/useIterator";

export const RepoMenu = ({ repository, onSelect, selectedRepo }: any) => {
    const [{ name }, previous, next] = useIterator(repository);

    useEffect(() => {
        onSelect(name);
    }, [name, onSelect]);
    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={previous}>&lt;</button>
                <p>{selectedRepo}</p>
                <button onClick={next}>&gt;</button>
            </div>
        </>
    );
};
