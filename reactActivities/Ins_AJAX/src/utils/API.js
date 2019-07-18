import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=zh6QW2fMxH8GVD6ovNNSRkE6W9DLAcri&limit=6";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};