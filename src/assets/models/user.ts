export class User {
    id: string;
    username: string;
    password: string;

    constructor(data) {
        this.id = data._id;
        this.username = data.gid;
        this.password = data.pword;
    }
}
