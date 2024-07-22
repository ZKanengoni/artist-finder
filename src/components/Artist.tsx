import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import fetchTopSongs from '../adapters/fetchTopSongs';
import fetchAlbums from '../adapters/fetchAlbums';

const Artist = () => {
  const { id } = useParams();

  //   const navigate = useNavigate();

  const songsQuery = useQuery({
    queryKey: [`songs`, id],
    queryFn: () => fetchTopSongs(id),
  });

  const albumsQuery = useQuery({
    queryKey: [`albums`, id],
    queryFn: () => fetchAlbums(id),
  });

  const albums = albumsQuery.data;
  const songs = songsQuery.data;

  console.log(albums);

  return <div>Artsit {id}</div>;
};

export default Artist;
