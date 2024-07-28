const checkIfEmailExists = (users, inputEmail) => {
    if (users && Array.isArray(users)) {
        for(const user of users) {
            const {email} = user;
            if(email === inputEmail) return true;
        }
    }

    return false;
}


module.exports = {
    checkIfEmailExists
}