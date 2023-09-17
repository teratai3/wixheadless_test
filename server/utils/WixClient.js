import { createClient, OAuthStrategy } from '@wix/api-client';
import { dataItems } from '@wix/data-items';

export default async () => {
  const config = useRuntimeConfig();

  const wixClient = createClient({
    modules: { dataItems },
    auth: OAuthStrategy({ clientId: config.wixClientId }),
  });

  const tokens = await wixClient.auth.generateVisitorTokens();
  wixClient.auth.setTokens(tokens);

  return wixClient;
}