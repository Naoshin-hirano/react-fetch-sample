import React from "react";

export const SearchForm = ({ value, onSearch }: any) => {
    return (
        <div>
            <span style={{ marginRight: "5px" }}>検索フォーム</span>
            <input type="text" value={value} onChange={onSearch} />
        </div>
    );
};
