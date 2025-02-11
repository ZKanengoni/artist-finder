import { useQuery } from '@tanstack/react-query';

import fetchArtist from '../adapters/fetchArtist';

import { addSearchTerm } from '../utils/utility';

export default function useArtist(id: string | undefined) {
  const results = useQuery({
    queryKey: [`artist{${id}`, id],
    queryFn: () => fetchArtist(id || ''),
  });

  if (id) addSearchTerm(id);

  return { data: results?.data, isLoading: results.isLoading };
}
