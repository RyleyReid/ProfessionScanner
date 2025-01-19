import React from 'react';
import { useRealms } from '../../hooks/useRealms';
import { useAuctionHouse } from '../../hooks/useAuctionHouse';
import { PageWrapper } from 'components/pageWrapper/pageWrapper';
import { Dropdown, DropdownOption } from 'components/dropdown/dropdown';

export const Dashboard = () => {
  const { realms, loading: realmsLoading, error: realmsError } = useRealms();
  const { realmId, setRealmId, auctionData, loading: auctionLoading, error: auctionError } = useAuctionHouse(4372);

  if (realmsLoading) return <div>Loading realms...</div>;
  if (realmsError) return <div>Error loading realms: {realmsError}</div>;

  const realmOptions: DropdownOption[] = realms.map(realm => ({
    name: `${realm.realms.map(r => r.name.en_US).join(', ')} (ID: ${realm.id})`,
    value: realm.id
  }));

  return (
    <PageWrapper>
      <h1>Auction House Data</h1>
      <Dropdown
        options={realmOptions}
        selectedValue={realmId}
        onValueChange={setRealmId}
        label="Select Realm"
        placeholder="Choose a realm..."
      />

      {auctionLoading && <div>Loading auction data...</div>}
      {auctionError && <div>Error: {auctionError}</div>}
      {auctionData && (
        <pre>{JSON.stringify(auctionData, null, 2)}</pre>
      )}
    </PageWrapper>
  );
}; 