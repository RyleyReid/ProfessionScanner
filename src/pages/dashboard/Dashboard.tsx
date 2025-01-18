import { useAuctionHouse } from '../../hooks/useAuctionHouse';

export const Dashboard = () => {
  const { realmId, setRealmId, auctionData, loading, error } = useAuctionHouse(1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Auction House Data</h1>
      <select value={realmId} onChange={(e) => setRealmId(Number(e.target.value))}>
        <option value="1">Realm 1</option>
        <option value="2">Realm 2</option>
      </select>
      <pre>{JSON.stringify(auctionData, null, 2)}</pre>
    </div>
  );
}; 