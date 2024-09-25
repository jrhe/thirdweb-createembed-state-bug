"use client";
import { useActiveWallet } from "thirdweb/react";
import { useRouter } from "next/navigation";
import { LogoutButton } from "../components/LogoutButton";
import { useEffect } from "react";

const AuthenticatedPage = () => {
  // redirect back if user is not logged in
  const wallet = useActiveWallet();
  const router = useRouter();

  useEffect(() => {
    if (!wallet) {
      router.replace("/connect-embed");
    }
  }, [wallet, router]);

  return (
    <div>
      <h1>Secure Page</h1>
      <p>You are logged in, so you can see this page!</p>
      {wallet &&
      <div>
        <h2>Wallet Address: {wallet?.getAccount()?.address}</h2>
        <LogoutButton/>
      </div>
    }
    </div>
  );
};

export default AuthenticatedPage;
