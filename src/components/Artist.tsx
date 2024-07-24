import { useParams } from 'react-router-dom';

import useArtist from '../hooks/userArtist';
import useAlbums from '../hooks/useAlbums';
import useSongs from '../hooks/useSongs';

import Header from './Header';
import Table from './Table';
import Carousel from './Carousel';
import Loader from './Loader';

const Artist = () => {
  const { id } = useParams();

  const albums = useAlbums(id);
  const songs = useSongs(id);
  const artist = useArtist(id);

  const isLoading = albums.isLoading && songs.isLoading && artist.isLoading;

  if (isLoading) {
    return <Loader />;
  }

  if (!artist.data) {
    return <h1>There was an issues fetching the artist. Please try again.</h1>;
  }

  return (
    <div className='w-full h-full'>
      <>
        <Header artist={artist.data} />

        <section className='w-full px-8 py-8'>
          <h1 className='mb-4 text-2xl font-bold'>Popular</h1>
          <div className='w-full popular'>
            <Table songs={songs.data} />
          </div>

          <h1 className='mb-4 text-2xl font-bold'>Albums</h1>
          <div className='w-full albums'>
            <Carousel albums={albums.data} />
          </div>
        </section>
      </>
    </div>
  );
};

export default Artist;
