import { ConnectEmbed } from "thirdweb/react";
import { generatePayload, isLoggedIn, login, logout } from "../actions/auth";
import { client } from "../../../lib/client";
import { useRouter } from "next/navigation";
export const ConnectEmbedComponent = () => {

  const router = useRouter();
  return (
    <ConnectEmbed
      client={client}
      auth={{
  isLoggedIn: async(address) => {
    console.log("checking if logged in!", { address });
    return await isLoggedIn();
  },
  doLogin: async (params) => {
    console.log("logging in!");
    await login(params);
    // if(await isLoggedIn()){
    router.replace("/connect-embed/secure");
    // }
  },
  getLoginPayload: async ({ address }) => await generatePayload({ address }),
  doLogout: async () => {
    console.log("logging out!");
     await logout();
  },
}}
/>)
}