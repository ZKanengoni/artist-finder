import { IArtist } from '../interfaces/interfaces';

const fetchArtist = async (artistID: string): Promise<IArtist> => {
  const apiRes = await fetch(`/api/artist/${artistID}`);

  if (!apiRes.ok) {
    throw new Error(`There was an error fetching artist:${artistID} data.`);
  }

  return apiRes.json();
};

export default fetchArtist;
