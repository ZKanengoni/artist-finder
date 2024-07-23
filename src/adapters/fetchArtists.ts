import { IArtistsResponse } from '../interfaces/interfaces';

const fetchArtists = async (artist: string): Promise<IArtistsResponse> => {
  const search = artist.replace(/\s+/g, '+');

  const apiRes = await fetch(
    `https://api.deezer.com/search/artist?q=${search}`
  );

  if (!apiRes.ok) {
    throw new Error(`There was an error fetching artist:${artist} data.`);
  }

  return apiRes.json();
};

export default fetchArtists;
