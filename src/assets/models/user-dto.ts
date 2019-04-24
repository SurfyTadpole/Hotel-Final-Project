export class UserDto {
    username: string;
    password: string;

    constructor(uname: string, pwrd: string) {
        this.username = uname;
        this.password = pwrd;
    }
    
}
