export let controllerLogin = (user_password:string, user_password_confirmed:string) => {
    if(user_password === user_password_confirmed) {
        return true;
    }
    return false;
}