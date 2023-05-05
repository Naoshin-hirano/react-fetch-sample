import React, { useState } from "react";
import "./App.css";
import { GitHubUser } from "./Components/GitHubUser";
import { RepositoryReadme } from "./Components/RepositoryReadme";
import { SearchForm } from "./Components/SearchForm";
import { UserRepository } from "./Components/UserRepository";

function App() {
    const [login, setLogin] = useState("moontahoe");
    const [repo, setRepo] = useState("learning-react");

    return (
        <>
            <SearchForm value={login} onSearch={setLogin} />
            {login && <GitHubUser login={login} />}
            {login && (
                <UserRepository
                    login={login}
                    selectedRepo={repo}
                    onSelect={setRepo}
                />
            )}
            {login && repo && <RepositoryReadme login={login} repo={repo} />}
        </>
    );
}

export default App;
