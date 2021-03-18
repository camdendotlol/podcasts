export interface podcastMetadata {
  wrapperType: string,
  kind: string,
  collectionId: number,
  trackId: number,
  artistName: string,
  collectionName: string,
  trackName: string,
  collectionCensoredName: string,
  trackCensoredName: string,
  collectionViewUrl: string,
  feedUrl: string,
  trackViewUrl: string,
  artworkUrl30: string,
  artworkUrl60: string,
  artworkUrl100: string,
  collectionPrice: number,
  trackPrice: number,
  trackRentalPrice: number,
  collectionHdPrice: number,
  trackHdPrice: number,
  trackHdRentalPrice: number,
  releaseDate: string,
  collectionExplicitness: string,
  trackExplicitness: string,
  trackCount: number,
  country: string,
  currency: string,
  primaryGenreName: string,
  contentAdvisoryRating: string,
  artworkUrl600: string,
  genreIds: Array<string>,
  genres: Array<string>
}

export interface iTunesResponse {
  resultCount: number,
  results: Array<podcastMetadata>
}

export enum Tabs {
  UserSubscriptions,
  PodcastDirectory,
}
