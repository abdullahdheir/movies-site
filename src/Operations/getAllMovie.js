import axios from "axios";


const getAllMovies = async (url, setPageCount, setMovies) => {
    const result = await axios.get(url);
    if (result.status !== 200) return setMovies([]);
    setMovies(result.data.results);
    setPageCount(500);
}






export default getAllMovies;