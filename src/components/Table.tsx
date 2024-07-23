import { ITableProps } from '../interfaces/interfaces';

const Table = ({ songs }: ITableProps) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th>Track</th>
            <th>Rank</th>
            <th>Duration (sec)</th>
          </tr>
        </thead>
        <tbody className=' overflow-y-scroll h-40'>
          {songs.map((song) => (
            <tr key={song.id}>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle h-12 w-12'>
                      <img
                        src={`${song.album.cover}`}
                        alt={`${song.title} cover`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>{song.title}</div>
                    <div className='text-sm opacity-50'>{song.artist.name}</div>
                  </div>
                </div>
              </td>
              <td>{song.rank}</td>
              <td>{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
