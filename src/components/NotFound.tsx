import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold'>{`404: The page can't be found :(`}</h1>
      <Link to='/'>
        <h1 className=' underline'>Let's go back home</h1>
      </Link>
    </div>
  );
};

export default NotFound;
