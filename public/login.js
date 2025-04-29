let registrerUser = document.getElementById("registrerUser");

registrerUser.addEventListener('click', async (event) => {
    let user_name = document.getElementById("user_name").value;
    let birthday_date = document.getElementById("birthday_date").value;
    let email = document.getElementById("email").value;
    let user_password = document.getElementById("user_password").value;
    let user_password_confirmed = document.getElementById("user_password_confirmed").value;

    if(user_password == user_password_confirmed) {
        let body = {
            user_name,
            birthday_date,
            email,
            user_password,
            user_password_confirmed
        }
    
        console.log(body);
    
        event.preventDefault();
    
        const RESPONSE = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    
        const DATA = await RESPONSE.json();
        console.log(DATA);

        let login = localStorage.setItem("Login", body.user_name);

        document.location.href = './home.html'
    }else{
        alert("Senhas não conferem, favor verificar se as senhas são iguais");
        event.preventDefault();
    }

   
})