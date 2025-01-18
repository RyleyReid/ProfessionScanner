import axios from "axios";

const getEnv = (envName: string): string => {
  const fullEnvName = 'REACT_APP_' + envName;
  const value = process.env[fullEnvName];
  if (!value) {
    throw new Error(`Missing environment variable: ${fullEnvName}`);
  }
  return value;
};

export const fetchOAuthToken = async (): Promise<string> => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  
  const response = await axios.post(getEnv('BLIZZARD_TOKEN_URL'), params, {
    auth: {
      username: getEnv('BLIZZARD_CLIENT_ID'),
      password: getEnv('BLIZZARD_CLIENT_SECRET'),
    },
  });

  return response.data.access_token;
};

export const WoWEndpoints = {
  auctionHouse: (realmId: number) => 
    `${getEnv('BLIZZARD_BASE_URL')}/data/wow/connected-realm/${realmId}/auctions`,
};