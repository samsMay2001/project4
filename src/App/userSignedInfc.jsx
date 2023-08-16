export function userSignedInfc(setLoggedUser){
    const userObj = localStorage.getItem('my-key'); 
    if (userObj) {
        setLoggedUser(userObj)
    }
}