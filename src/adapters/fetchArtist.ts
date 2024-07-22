import { IArtistResponse } from '../interfaces/interfaces';

const fetchArtist = async (artist: string): Promise<IArtistResponse> => {
  const search = artist.replace(' ', '+');

  const apiRes = await fetch(
    `https://api.deezer.com/search/artist?q=${search}`
  );

  if (!apiRes.ok) {
    throw new Error(`There was an error fetching artist:${artist} data.`);
  }

  return apiRes.json();
};

export default fetchArtist;
