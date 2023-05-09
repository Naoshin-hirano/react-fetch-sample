import UserAgent from "user-agents";

// Githubへのリクエスト時にヘッダーで送信しないと403権限エラー出る
const userAgent = new UserAgent();

export const header = {
    headers: {
        "User-Agent": userAgent.toString(),
    },
};
