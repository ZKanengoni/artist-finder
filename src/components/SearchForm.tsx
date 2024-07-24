import { ChangeEvent, useState } from 'react';

import useArtists from '../hooks/useArtists';

import Results from './Results';
import Loader from './Loader';
import useDebounce from '../hooks/useDebounce';
import RecentSearch from './RecentSearch';

const SearchForm = () => {
  const [artist, setArtist] = useState('');
  const debouncedArtist = useDebounce(artist, 500);

  const { data, isLoading } = useArtists(debouncedArtist);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArtist(e.target.value);
  };

  return (
    <>
      <div className='w-full '>
        <form className='flex flex-row justify-center py-2'>
          <label className='flex items-center gap-2 rounded-none input input-bordered'>
            <input
              type='text'
              className='grow'
              placeholder='Enter artist name'
              name='artist'
              onChange={(e) => handleChange(e)}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                clipRule='evenodd'
              />
            </svg>
          </label>
        </form>

        <RecentSearch />
      </div>

      {isLoading ? <Loader /> : <Results data={data} />}
    </>
  );
};

export default SearchForm;
