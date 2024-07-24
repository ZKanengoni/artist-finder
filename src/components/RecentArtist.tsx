import { Link } from 'react-router-dom';

import useArtist from '../hooks/userArtist';

import { IRecentArtistProps } from '../interfaces/interfaces';

const RecentArtist = ({ id }: IRecentArtistProps) => {
  const artist = useArtist(id).data;

  return (
    <div className='relative mx-2 group'>
      <Link to={`/artist/${artist?.name.replace(/\s+/g, '+')}/${artist?.id}`}>
        <div className='relative'>
          <img
            className='w-40 h-40 mask mask-circle sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-48 lg:h-48 hover:border-[#2b3540] transition-all'
            src={`${artist?.picture_medium}`}
            alt={`${artist?.name}`}
          />
          <div className='absolute inset-0 flex items-center justify-center transition-opacity bg-black rounded-[50%] opacity-0 bg-opacity-40 group-hover:opacity-100'>
            <span className='text-white'>{artist?.name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecentArtist;
