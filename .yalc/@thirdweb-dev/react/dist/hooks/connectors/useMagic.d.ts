import { LoginWithMagicLinkConfiguration } from "magic-sdk";
/**
 * Hook for connecting to an email wallet using magic link.
 * This enables users without their own wallets to connect to your application and sign transactions securely using their email.
 *
 * ```javascript
 * import { useMagic } from "@thirdweb-dev/react"
 * ```
 *
 *
 * @example
 * Before using this hook, you first need to set up the magic configuration in your `ThirdwebProvider`, including your magic API key.
 *
 * ```javascript
 * // Add the magic configuration object to your wallet connectors
 * const connectors = [
 *   "metamask",
 *   "walletConnect",
 *   "walletLink",
 *   {
 *     name: "magic",
 *     options: {
 *       apiKey: "your-magic-api-key",
 *     }
 *   }
 * ]
 *
 * // Add the above to the walletConnectors prop of your <ThirdwebProvider />
 * const Provider = ({ children }) => (
 *   return (
 *     <ThirdwebProvider
 *       walletConnectors={connectors}
 *       // Specify remaining parameters
 *       ...
 *     >
 *       {children}
 *     </ThirdwebProvider>
 *   )
 * }
 * ```
 *
 * In order to use the hook to connect users with magic link, you just need to provide the users email to the connect function.
 *
 * You can setup the hook with the following configuration:
 * ```javascript
 * import { useMagic } from "@thirdweb-dev/react"
 * import { useState } from "react"
 *
 * const LoginWithMagicLink = () => {
 *   const connectWithMagic = useMagic()
 *   const [email, setEmail] = useState()
 *
 *   return (
 *     <div>
 *       <input value={email} onChange={(e) => setEmail(e.target.value)} />
 *       <button onClick={() => connectWithMagic({ email })}>Login</button>
 *     </div>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useMagic(): (configuration: LoginWithMagicLinkConfiguration) => Promise<{
    data?: import("wagmi-core").ConnectorData<any> | undefined;
    error?: Error | undefined;
}>;
