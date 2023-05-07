import React from "react";
import { Fetch } from "./Fetch";

const UserDetail = ({ data }: any) => {
    return (
        <div className="githubUser">
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{ width: 200 }}
            />
            <div>
                <h1>{data.login}</h1>
                {data && <p>{data.name}</p>}
                {data && <p>{data.location}</p>}
            </div>
        </div>
    );
};

export const GitHubUser = ({ login }: any) => {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={UserDetail}
        />
    );
};
