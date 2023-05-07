import React from "react";
import { Fetch } from "./Fetch";
import { RepoMenu } from "./RepoMenu";

export const UserRepository = ({ login, selectedRepo, onSelect }: any) => {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({ data }: any) => {
                return (
                    <RepoMenu
                        repository={data}
                        onSelect={onSelect}
                        selectedRepo={selectedRepo}
                    />
                );
            }}
        />
    );
};
