import { db } from '../firebase';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import User from '../models/User';
import { v4 } from 'uuid';
import bcrypt from 'bcrypt';
import tokenService from '../services/tokenService';

const usersRef = collection(db, 'users');

class UserServices {

  public async getUsers() {
    const users = (await getDocs(usersRef)).docs.map(user => user.data());
    return users;
  }

  public async registration(email: string, password: string) {
    const candidate = await this.findUserByEmail(email);

    if (candidate) {
      throw Error(`Пользователь с почтой ${email} уже зарегистрирован`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const userId = v4();
    const tokens = tokenService.generateTokens(userId);
    await tokenService.saveToken(userId, tokens.refreshToken);
    const user = new User({ email, password: hashPassword, id: userId });
    await setDoc(doc(db, 'users', user.id), { ...user });

    return {
      ...tokens,
      user,
    };
  }

  public async login(email: string, password: string) {
    const candidate = await this.findUserByEmail(email);

    if (!candidate) {
      throw Error('Пользователь не был найден');
    }

    const user = candidate.data();
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw Error('Введен неверный пароль');
    }
    const tokens = tokenService.generateTokens(user.id);
    await tokenService.saveToken(user.id, tokens.refreshToken);

    return user;

  }

  private async findUserByEmail(email: string) {
    const candidates = query(usersRef, where('email', '==', email));
    const candidateRef = (await getDocs(candidates)).docs[0];
    return candidateRef;
  }

}

export default new UserServices;