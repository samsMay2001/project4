export function userSignedInfc(setLoggedUser){
    const userObj = JSON.parse(localStorage.getItem('my-key'))
    
    if (userObj) {
        console.log('initializing user')
        setLoggedUser(userObj)
    }else {
        console.log('user not signed in')
    }
}