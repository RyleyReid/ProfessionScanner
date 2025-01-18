export const WoWEndpoints = {
  auctionHouse: (connectedRealmId: number) => 
    `${process.env.REACT_APP_BLIZZARD_BASE_URL}/data/wow/connected-realm/${connectedRealmId}/auctions`,
  realmIndex: () =>
    `${process.env.REACT_APP_BLIZZARD_BASE_URL}/data/wow/connected-realm/index`,
  realmDetail: (href: string) => href,
  realm: (realmId: number) =>
    `${process.env.REACT_APP_BLIZZARD_BASE_URL}/data/wow/realm/${realmId}`
};

export const WoWParams = {
  classic: {
    namespace: 'dynamic-classic-us',
    locale: 'en_US'
  }
};
