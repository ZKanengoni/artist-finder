import { useQuery } from '@tanstack/react-query';

import fetchArtists from '../adapters/fetchArtists';

export default function useArtists(artist: string) {
  const results = useQuery({
    queryKey: ['search', artist],
    queryFn: () => fetchArtists(artist),
  });

  return { data: results.data?.data ?? [], isLoading: results.isLoading };
}
