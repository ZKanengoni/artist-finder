import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

import fetchArtist from '../adapters/fetchArtist';
import Results from './Results';

const SearchForm = () => {
  const [artist, setArtist] = useState('');

  const results = useQuery({
    queryKey: ['search', artist],
    queryFn: () => fetchArtist(artist),
  });

  const { data } = results;

  return (
    <>
      <Container maxWidth='sm'>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            const artistValue = formData.get('artist') as string;

            setArtist(artistValue);
          }}
        >
          <TextField
            id='outlined-basic'
            label='Artist'
            variant='outlined'
            name='artist'
          />
          <Button variant='contained' type='submit'>
            Search
          </Button>
        </form>
      </Container>
      <Results data={data} />
    </>
  );
};

export default SearchForm;
