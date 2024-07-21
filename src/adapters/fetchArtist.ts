import { IArtist } from '../interfaces/interfaces';

const fetchArtist = async (artist: string): Promise<IArtist> => {
  const apiRes = await fetch(`https://api.deezer.com/artist/${artist}`);

  if (!apiRes.ok) {
    throw new Error(`There was an error fetching artist:${artist} data.`);
  }

  return apiRes.json();
};

export default fetchArtist;
