import axios from "axios";

//get current page
const getPage = async (url, setPageCount, setMovies) => {
    console.log(url)
    const res = await axios.get(url);
    setMovies(res.data.results);
    setPageCount(500);
}

export default getPage;