import { useRealms } from '../../hooks/useRealms';
import { useAuctionHouse } from '../../hooks/useAuctionHouse';
import { PageWrapper } from 'components/pageWrapper/pageWrapper';

export const Dashboard = () => {
  const { realms, loading: realmsLoading, error: realmsError } = useRealms();
  const { realmId, setRealmId, auctionData, loading: auctionLoading, error: auctionError } = useAuctionHouse(4372);

  if (realmsLoading) return <div>Loading realms...</div>;
  if (realmsError) return <div>Error loading realms: {realmsError}</div>;

  return (
    <PageWrapper>
      <h1>Auction House Data</h1>
      <select 
        value={realmId} 
        onChange={(e) => setRealmId(Number(e.target.value))}
      >
        {realms.map(realm => (
          <option key={realm.id} value={realm.id}>
            {realm.realms.map(r => r.name.en_US).join(', ')} (Connected Realm ID: {realm.id})
          </option>
        ))}
      </select>

      {auctionLoading && <div>Loading auction data...</div>}
      {auctionError && <div>Error: {auctionError}</div>}
      {auctionData && (
        <pre>{JSON.stringify(auctionData, null, 2)}</pre>
      )}
    </PageWrapper>
  );
}; 