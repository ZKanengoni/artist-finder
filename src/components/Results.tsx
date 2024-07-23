import { Link } from 'react-router-dom';

import { IResultProps } from '../interfaces/interfaces';

const Results = ({ data }: IResultProps) => {
  const artists = data?.data;

  return (
    <div className=' container mx-auto p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {!artists?.length ? (
          <h1 className='text-center'>No artists found</h1>
        ) : (
          artists.map((artist) => (
            <div className='card bg-base-100 w-80 rounded-none' key={artist.id}>
              <Link to={`/artist/${artist.id}`}>
                <figure>
                  <img
                    src={artist.picture_big}
                    alt={`musical artist/band ${artist.name}`}
                  />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>{artist.name}</h2>
                  <p>fans {artist.nb_fan}</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Results;
