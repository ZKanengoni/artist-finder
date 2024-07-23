import { useQuery } from '@tanstack/react-query';

import fetchTopSongs from '../adapters/fetchTopSongs';

export default function useSongs(id: string | undefined) {
  const results = useQuery({
    queryKey: [`songs`, id],
    queryFn: () => fetchTopSongs(id),
  });

  return { data: results.data?.data ?? [], isLoading: results.isLoading };
}
