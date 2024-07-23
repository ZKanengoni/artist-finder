import { useQuery } from '@tanstack/react-query';

import fetchAlbums from '../adapters/fetchAlbums';

export default function useAlbums(id: string | undefined) {
  const results = useQuery({
    queryKey: [`albums`, id],
    queryFn: () => fetchAlbums(id),
  });

  return { data: results?.data?.data ?? [], isLoading: results.isLoading };
}
