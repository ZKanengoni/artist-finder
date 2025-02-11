import { useNavigate } from 'react-router-dom';

import { IHeaderProps } from '../interfaces/interfaces';
import { formatNumber } from '../utils/utility';

const Header = ({ artist }: IHeaderProps) => {
  const { name, picture_xl, nb_fan } = artist;

  const navigate = useNavigate();

  const fanCount = formatNumber(nb_fan);

  return (
    <header className='w-full h-[24rem]'>
      <div
        className='hero h-[24rem] bg-cover bg-center relative'
        style={{
          backgroundImage: `url(${picture_xl})`,
        }}
      >
        <div className='absolute inset-0 bg-opacity-50 hero-overlay'></div>

        <button
          className='absolute btn btn-circle top-4 left-4'
          onClick={() => {
            navigate('/');
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        <div className='absolute bottom-0 left-0 p-4 text-white'>
          <h1 className='mb-5 font-black text-7xl'>{name}</h1>
          <p>{fanCount} total fans</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
