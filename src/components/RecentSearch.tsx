import { memo } from 'react';

import RecentArtist from './RecentArtist';
import { getRecentSearches } from '../utils/utility';

const RecentSearch = () => {
  const storedArtists: string[] = getRecentSearches();

  return (
    <>
      {storedArtists.length ? (
        <div className='container w-full p-4 mx-auto'>
          <h1 className='mb-4 text-2xl font-bold'>Recent</h1>
          {!storedArtists.length ? (
            <p>No recent searches</p>
          ) : (
            <div className='flex space-x-4 md:space-x-8 lg:space-x-8'>
              {storedArtists.map((id: string) => (
                <RecentArtist key={id} id={id} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(RecentSearch);
