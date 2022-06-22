import axios from "axios";

const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
//instance.get('/foo-bar');
export default instance;// //since we are seting default export so we can change the name of the exprot module
//one file will have only ONE defalt componenet but have multiple NON-DEFAULT components