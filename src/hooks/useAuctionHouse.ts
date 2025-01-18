import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchOAuthToken, WoWEndpoints } from '../endpoints/endpoints';

interface AuctionData {
  // Define your auction data interface here
  // This is a placeholder - adjust based on actual API response
  auctions: Array<{
    id: number;
    item: {
      id: number;
      name: string;
    };
    price: number;
  }>;
}

export const useAuctionHouse = (initialRealmId: number) => {
  const [realmId, setRealmId] = useState<number>(initialRealmId);
  const [auctionData, setAuctionData] = useState<AuctionData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuctionData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const token = await fetchOAuthToken();
        const response = await axios.get(WoWEndpoints.auctionHouse(realmId), {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        setAuctionData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch auction data');
      } finally {
        setLoading(false);
      }
    };

    fetchAuctionData();
  }, [realmId]);

  return { realmId, setRealmId, auctionData, loading, error };
};