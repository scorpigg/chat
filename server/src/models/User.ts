class User {

  public id: string;

  public email: string;

  public password: string;

  constructor(user: User) {
    this.email = user.email;
    this.password = user.password;
    this.id = user.id;
  }

}

export default User;