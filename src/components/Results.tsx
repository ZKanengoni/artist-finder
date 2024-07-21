import { Card } from '@mui/material';
import { IResultProps } from '../interfaces/interfaces';

const Results = ({ data }: IResultProps) => {
  return <Card variant='outlined'>{data?.name}</Card>;
};

export default Results;
