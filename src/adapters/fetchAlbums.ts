const fetchAlbums = async (artistId: string = '1') => {
  const apiRes = await fetch(`/api/artist/${artistId}/albums`);

  if (!apiRes.ok) {
    throw new Error(`There was an error fetching the album data`);
  }

  return apiRes.json();
};

export default fetchAlbums;
