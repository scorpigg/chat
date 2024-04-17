import { Request, Response } from 'express';
import userServices from '../services/user-service';

class UserController {

  public async registration(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await userServices.registration(email, password);
      return res.json(user);
    } catch (e) {
      console.log(e);
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await userServices.login(email, password);
      return res.json(user);
    } catch (e) {
      console.log(e);
    }
  }

  public async getUsers(req: Request, res: Response) {
    try {
      const users = await userServices.getUsers();
      return res.json(users);
    } catch (e) {
      console.log(e);
    }
  }

}

export default new UserController;