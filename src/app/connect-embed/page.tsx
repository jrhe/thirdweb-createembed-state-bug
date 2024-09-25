"use client";
import type { NextPage } from "next";
import { useActiveWallet } from "thirdweb/react";
import { ConnectEmbedComponent } from "./components/ConnectEmbed";
import { useRouter } from "next/navigation";
import { LogoutButton } from "./components/LogoutButton";

const ConnectButtonPage: NextPage = () => {
  const wallet = useActiveWallet();
  const router = useRouter();
  return (
    <>
    <h1>Connect Embed login page</h1>
    <ConnectEmbedComponent/>

    {wallet &&
      <div>
        <h2>Wallet Address: {wallet?.getAccount()?.address}</h2>
        <LogoutButton/>
      </div>
    }
    </>
  );
};

export default ConnectButtonPage;
