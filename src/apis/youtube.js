import axios from 'axios';

const KEY = "AIzaSyBWmpE4Q__3necqEW0TLa8yyiGMlCkzE0Y"

export default axios.create({
    baseURL:'https://www.youtubeapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult: 5,
        key:KEY
    }
})