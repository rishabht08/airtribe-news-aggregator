const users = require("../utils/users-sample")
const getNews = require("../utils/newsApi")

const preferenceHandler = {}



preferenceHandler.getUserPreferences = async (req, res) => {
    const { preferences } = req.user
    return res.status(200).json({
        preferences
    })
}

preferenceHandler.setUserPreferences = async (req, res) => {
    const { preferences } = req.body;
    const index = users.findIndex(user => {
        return user.email === req.user.email
    })
    users[index].preferences = preferences;
    return res.status(200).json({
        preferences
    })
}


preferenceHandler.getNews = async (req, res) => {
    const {user} = req;
    const {email , preferences} = user
    const query = preferences.join(" AND ")
    const resp = await getNews(email  , query);

    return res.status(200).json({
        news:resp
    })
}


module.exports = preferenceHandler