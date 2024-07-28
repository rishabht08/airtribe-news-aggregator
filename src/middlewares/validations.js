const validateInput = async (req , res , next) => {
    const {name , email , password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            status: false,
            message: 'Email and password needs to be present'
        })
    }

    next();
}

module.exports = validateInput;