class User{
    constructor(email, password){
        this._email = email;
        this._password = password;
    }
    get email (){
        return this._email;
    }
    set email(argum){
        this._email = argum;
    }

    get password (){
        return this._password;
    }
    set password(argum){
        this._password = argum;
    }
}