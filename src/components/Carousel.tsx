import { ICarouselProps } from '../interfaces/interfaces';

const Carousel = ({ albums }: ICarouselProps) => {
  return (
    <div className='carousel carousel-center rounded-none'>
      {albums.map((album) => (
        <div className='carousel-item mx-4 ' key={album.id}>
          <div>
            <img
              src={`${album.cover_medium}`}
              alt={`${album.title} album cover image`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
