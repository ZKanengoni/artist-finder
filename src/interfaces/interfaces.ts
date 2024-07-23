export interface IArtist {
  id: string;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
  type: string;
}

export interface IAlbum {
  cover: string;
  cover_big: string | null;
  cover_medium: string | null;
  cover_small: string | null;
  cover_xl: string | null;
  explicit_lyrics: boolean;
  fans: number;
  genre_id: number;
  id: number;
  link: string;
  md5_image: string;
  record_type: string;
  release_date: string;
  title: string;
  tracklist: string;
  type: string;
}

export interface IArtistsResponse {
  data: IArtist[];
  total: number;
}

export interface IResultProps {
  data: IArtistsResponse | undefined;
}

export interface IContributor {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: string;
  role: string;
}

export interface IAlbumArtist {
  id: string;
  name: string;
  tracklist: string;
  type: string;
}

export interface IAlbum {
  id: number;
  title: string;
  cover: string;
  cover_small: string | null;
  cover_medium: string | null;
  cover_big: string | null;
  cover_xl: string | null;
  md5_image: string;
  tracklist: string;
  type: string;
}

export interface ISong {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  contributors: IContributor[];
  md5_image: string;
  artist: IAlbumArtist;
  album: IAlbum;
  type: string;
}

export interface IHeaderProps {
  artist: IArtist | never[];
}

export interface ITableProps {
  songs: ISong[];
}

export interface ICarouselProps {
  albums: IAlbum[];
}
