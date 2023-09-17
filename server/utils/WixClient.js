import { createClient, OAuthStrategy } from '@wix/api-client';
import { dataItems } from '@wix/data-items';

export default async () => {
  const config = useRuntimeConfig();

  const wixClient = createClient({
    modules: { dataItems },
    auth: OAuthStrategy({ clientId: config.wixClientId }),
    //auth: OAuthStrategy({ clientId: "83775847-e53f-436e-8e83-2ff173c4cefe" }),
  });

  const tokens = await wixClient.auth.generateVisitorTokens();
  wixClient.auth.setTokens(tokens);

  return wixClient;
}