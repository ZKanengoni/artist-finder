import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import fetchTopSongs from '../adapters/fetchTopSongs';
import fetchAlbums from '../adapters/fetchAlbums';
import fetchArtist from '../adapters/fetchArtist';

import Header from './Header';
import Table from './Table';
import Carousel from './Carousel';

const Artist = () => {
  const { id } = useParams();

  const songsQuery = useQuery({
    queryKey: [`songs`, id],
    queryFn: () => fetchTopSongs(id),
  });

  const albumsQuery = useQuery({
    queryKey: [`albums`, id],
    queryFn: () => fetchAlbums(id),
  });

  const artistQuery = useQuery({
    queryKey: [`artist{${id}`, id],
    queryFn: () => fetchArtist(id || ''),
  });

  const albums = albumsQuery.data?.data || [];
  const songs = songsQuery.data?.data || [];
  const artist = artistQuery.data || [];

  console.log('Songs: ', songs);

  return (
    <div className='w-full h-full'>
      <Header artist={artist} />

      <section className='w-full py-8 px-8'>
        <h1 className='text-2xl font-bold mb-4'>Popular</h1>
        <div className='popular w-full'>
          <Table songs={songs} />
        </div>

        <h1 className='text-2xl font-bold mb-4'>Albums</h1>
        <div className='albums w-full'>
          <Carousel albums={albums} />
        </div>
      </section>
    </div>
  );
};

export default Artist;
