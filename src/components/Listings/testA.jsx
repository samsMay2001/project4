setFav(async (oldVal)=> {
    const loggedUserCopy = {...loggedUser}
    // create a modified loggedUser obj that doesn't have an id or version
    
    if (!oldVal){ // add this property to the user's favorites
        loggedUserCopy.favorites = [...loggedUser.favorites, listing._id]
    } else { // filter this property from the user's favorites
        loggedUserCopy.favorites = loggedUser.favorites.filter(favorite => favorite !== listing._id); 
    }
    const updateObj = {
        firstname : loggedUserCopy.firstname, 
        lastname : loggedUserCopy.lastname,
        email : loggedUserCopy.email, 
        password : loggedUserCopy.password,
        address : loggedUserCopy.address, 
        favorites : loggedUserCopy.favorites
    }
    // post the data 
    try {
        const res = await axios.post('http://localhost:4000/edit', qs.stringify(updateObj), {
            header: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
        })
        console.log('added to favorites')
        console.log(res.data)
        setLoggedUser(loggedUserCopy)
    }catch(err){
        console.log(err, 'there was an error')
        return false
    }
    console.log(oldVal)
    if (!oldVal){
        return true
    }
    // if(oldVal) {
    //     console.log(oldVal)
    //     return false
    // }
    
})