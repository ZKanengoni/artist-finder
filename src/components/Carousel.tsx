import { ICarouselProps } from '../interfaces/interfaces';

const Carousel = ({ albums }: ICarouselProps) => {
  return (
    <div className='carousel carousel-center rounded-none'>
      {albums.map((album) => (
        <div className='carousel-item' key={album.id}>
          <img
            src={`${album.cover_medium}`}
            alt={`${album.title} cover image`}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
