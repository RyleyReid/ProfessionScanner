import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchOAuthToken } from '../endpoints/endpoints';
import { WoWEndpoints, WoWParams } from '../endpoints/urls';

interface Realm {
  id: number;
  realms: Array<{
    name: { en_US: string };
  }>;
}

export const useRealms = () => {
  const [realms, setRealms] = useState<Realm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRealms = async () => {
      try {
        const token = await fetchOAuthToken();
        const indexResponse = await axios.get(
          WoWEndpoints.realmIndex(),
          {
            headers: { 'Authorization': `Bearer ${token}` },
            params: WoWParams.classic
          }
        );

        const realmPromises = indexResponse.data.connected_realms.map((realm: { href: string }) =>
          axios.get(WoWEndpoints.realmDetail(realm.href), {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        );

        const realmResponses = await Promise.all(realmPromises);
        const realmData = realmResponses.map(response => response.data);
        setRealms(realmData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch realms');
      } finally {
        setLoading(false);
      }
    };

    fetchRealms();
  }, []);

  return { realms, loading, error };
};