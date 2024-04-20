import $api from '../http';

export default class AuthService {

  public static async registration(email:string, password: string) {
    return $api.post('/registration', { email, password });
  }

}