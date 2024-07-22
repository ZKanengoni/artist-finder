import { Card, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { IResultProps } from '../interfaces/interfaces';

const Results = ({ data }: IResultProps) => {
  const artists = data?.data;

  return (
    <Grid container spacing={2}>
      {!artists?.length ? (
        <Typography variant='h2'>No artists found</Typography>
      ) : (
        artists.map((artist) => (
          <Grid item xs={6} key={artist.id}>
            <Card variant='outlined'>
              <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Results;
