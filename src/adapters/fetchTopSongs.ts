const fetchTopSongs = async (artistId: string = '1') => {
  const apiRes = await fetch(`https://api.deezer.com/artist/${artistId}/top`);

  if (!apiRes.ok) {
    throw new Error(
      `There was an error fetching top songs for artist ${artistId}`
    );
  }

  return apiRes.json();
};

export default fetchTopSongs;
