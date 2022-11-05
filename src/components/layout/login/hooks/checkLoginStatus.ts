
import { loginStatus } from "../../../../api/login";

export default async function checkLoginStatus(cookie: string) {
    const { code, account, profile } = await loginStatus(cookie);
    return {
        code,
        account,
        profile
    }
}