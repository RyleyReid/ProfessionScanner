export const WoWEndpoints = {
  auctionHouse: (connectedRealmId: number) => 
    `${process.env.REACT_APP_BLIZZARD_BASE_URL}/data/wow/connected-realm/${connectedRealmId}/auctions`,
  realmIndex: () =>
    `${process.env.REACT_APP_BLIZZARD_BASE_URL}/data/wow/connected-realm/index`,
  realmDetail: (href: string) => href
};

export const WoWParams = {
  classic: {
    namespace: 'dynamic-classic-us',
    locale: 'en_US'
  },
  retail: {
    namespace: 'dynamic-us',
    locale: 'en_US'
  },
  classicEra: {
    namespace: 'dynamic-classic1x-us',
    locale: 'en_US'
  },
  wrath: {
    namespace: 'dynamic-classic-us',
    locale: 'en_US'
  }
};
