import { db } from '../firebase';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import User from '../models/User';
import { v4 } from 'uuid';

const usersRef = collection(db, 'users');

class UserServices {

  public async getUsers() {
    const users = (await getDocs(usersRef)).docs.map(user => user.data());
    return users;
  }

  public async registration(email: string, password: string) {
    const candidates = query(usersRef, where('email', '==', email));
    const candidateRef = (await getDocs(candidates)).docs[0];

    if (candidateRef) {
      throw Error(`Пользователь с почтой ${email} уже зарегистрирован`);
    }
    const userId = v4();
    const user = new User({ email, password, id: userId });
    await setDoc(doc(db, 'users', user.id), { ...user });
    return user;
  }

  public async login(email: string, password: string) {
    const candidates = query(usersRef, where('email', '==', email));
    const candidateRef = (await getDocs(candidates)).docs[0];

    if (!candidateRef) {
      throw Error('Пользователь не был найден');
    }

    const user = candidateRef.data();

    if (user.password !== password) {
      throw Error('Введен неверный пароль');
    }

    return user;

  }

}

export default new UserServices;