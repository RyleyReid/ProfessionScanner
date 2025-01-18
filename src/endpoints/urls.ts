export const WoWEndpoints = {
  auctionHouse: (realmId: number) => 
    `${process.env.REACT_APP_BLIZZARD_BASE_URL}/data/wow/connected-realm/${realmId}/auctions`,
  realmIndex: () =>
    `${process.env.REACT_APP_BLIZZARD_BASE_URL}/data/wow/connected-realm/index`,
  realmDetail: (href: string) => href
};

export const WoWParams = {
  classic: {
    namespace: 'dynamic-classic-us',
    locale: 'en_US'
  }
};
