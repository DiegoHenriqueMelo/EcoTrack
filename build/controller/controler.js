export let controllerLogin = (user_password, user_password_confirmed) => {
    if (user_password === user_password_confirmed) {
        return true;
    }
    return false;
};
