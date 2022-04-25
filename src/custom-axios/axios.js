import axios from "axios";

const instance=axios.create({
    baseURL:'https://library-app-frontend-emt-191024.herokuapp.com/',
    headers:{
        "Access-Control-Allow-Origin":"*"
    }
});

export default instance;
