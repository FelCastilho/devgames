import axios from "axios";


//https://api.rawg.io/api/games?page_size=5&key=96ffa22939174620840e464e6200055c

const api = axios.create({
    baseURL:"https://api.rawg.io/",

})

export default api;