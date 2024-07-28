require('dotenv').config()
const axios = require("axios")
const { newsCache } = require("./cache")

const getNews = async (userId, query) => {

    if(newsCache[userId]) return newsCache[userId];
    
    const resp = await axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2024-07-27&to=2024-07-28&apiKey=${process.env.NEWS_API_KEY}&pageSize=10&page=1`)

    newsCache[userId] = resp.data ;
    return newsCache[userId];

}

module.exports = getNews