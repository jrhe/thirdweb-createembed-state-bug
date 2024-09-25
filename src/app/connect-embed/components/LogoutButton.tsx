import { logout } from "../actions/auth";
import { useActiveWallet } from "thirdweb/react";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
    const router = useRouter();
    const wallet = useActiveWallet();
    return <button onClick={async () => {await logout(); await wallet?.disconnect(); await router.replace('/connect-embed')}}>Log out</button>
}