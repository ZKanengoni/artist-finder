import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Results from './Results';
import Loader from './Loader';
import fetchArtists from '../adapters/fetchArtists';

const SearchForm = () => {
  const [artist, setArtist] = useState('');

  const results = useQuery({
    queryKey: ['search', artist],
    queryFn: () => fetchArtists(artist),
  });

  const { data, isLoading } = results;

  return (
    <>
      <div className=' w-full'>
        <form
          className='flex justify-center flex-row py-2'
          onSubmit={(e) => {
            e.preventDefault();

            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            const artistValue = formData.get('artist') as string;

            setArtist(artistValue);
          }}
        >
          <label className='input input-bordered flex items-center gap-2 rounded-none'>
            <input
              type='text'
              className='grow'
              placeholder='Enter artist name'
              name='artist'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-4 w-4 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                clipRule='evenodd'
              />
            </svg>
          </label>

          <button className='btn btn-neutral mx-2 rounded-none' type='submit'>
            Search
          </button>
        </form>
      </div>

      {isLoading ? <Loader /> : <Results data={data} />}
    </>
  );
};

export default SearchForm;
