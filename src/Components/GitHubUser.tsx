import React from "react";
// import { useFetch } from "../Hooks/useFetch";
import { Fetch } from "./Fetch";

const UserDetail = ({ data }: any) => {
    return (
        <div className="githubUser">
            <img
                src={data?.avatar_url}
                alt={data?.login}
                style={{ width: 200 }}
            />
            <div>
                <h1>{data?.login}</h1>
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
    // const { loading, data, error } = useFetch(
    //     `https://api.github.com/users/${login}`
    // );

    // if (error) {
    //     return <pre>{JSON.stringify(error, null, 2)}</pre>;
    // }

    // if (loading) {
    //     return <h1>loading...</h1>;
    // }

    // return (
    //     <div className="githubUser">
    //         <img
    //             src={data.avatar_url}
    //             alt={data.login}
    //             style={{ width: 200 }}
    //         />
    //         <div>
    //             <h1>{data.login}</h1>
    //             {data.name && <p>{data.name}</p>}
    //             {data.location && <p>{data.location}</p>}
    //         </div>
    //     </div>
    // );
};
