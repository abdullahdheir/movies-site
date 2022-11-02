const api_key = '14bbb43e24c769f8473f4687b8ce68fa';
const Url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=ar`;
const UrlWithPage = `${ Url }&page=`;
const UrlWithQuery = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`;
export { Url, UrlWithPage, UrlWithQuery ,api_key}