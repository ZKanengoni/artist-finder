import { Link } from 'react-router-dom';

import { IResultProps } from '../interfaces/interfaces';
import { formatNumber } from '../utils/utility';

const Results = ({ data: artists }: IResultProps) => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Artists</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {!artists?.length ? (
          <h1 className='col-span-1 sm:col-span-2 lg:col-span-4 text-center'>
            No artists to display
          </h1>
        ) : (
          artists.map((artist) => (
            <div
              className='card bg-base-100 w-full p-4 rounded-md hover:bg-[#2b3540] transition-all'
              key={artist.id}
            >
              <Link
                to={`/artist/${artist.name.replace(/\s+/g, '+')}/${artist.id}`}
              >
                <figure>
                  <img
                    className='mask mask-circle'
                    src={artist.picture_big}
                    alt={`musical artist/band ${artist.name}`}
                  />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>{artist.name}</h2>
                  <p>{formatNumber(artist.nb_fan)} fans</p>
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
