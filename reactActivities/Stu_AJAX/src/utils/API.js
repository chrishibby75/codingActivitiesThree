import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=bf1cc516";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};

