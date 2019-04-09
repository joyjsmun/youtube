import axios from 'axios';

const KEY = 'AIzaSyDOz7tm1_aEPHRCbmv1ElhtMU0cDVad_W4'
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResult: 5,
        key:KEY
    }
})