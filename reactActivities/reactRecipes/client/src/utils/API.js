import axios from "axios";

export default {
    getRecipes: function(query) {
        return axios.get("/api/recipes", { params: {q: query} });
    }
};