import axios from "axios";
import { Url, UrlWithQuery } from "../config";
import getAllMovies from "./getAllMovie";

//to search in api
const search = async (word, setpageCount, setMovies) => {
    console.log(word);
    if (word === "") {
        getAllMovies(Url, setpageCount, setMovies);
    } else {
        const res = await axios.get(`${ UrlWithQuery }${ word }`);
        setMovies(res.data.results)
        setpageCount(500)
    }
}

export default search;