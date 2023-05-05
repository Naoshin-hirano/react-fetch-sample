import React from "react";
import { Fetch } from "./Fetch";
import { RepoMenu } from "./RepoMenu";

export const UserRepository = ({ login, onSelect }: any) => {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({ data }: any) => {
                <RepoMenu repository={data} onSelect={onSelect} />;
            }}
        />
    );
};
