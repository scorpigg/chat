import { db } from './../firebase';
import { collection, doc, updateDoc } from 'firebase/firestore';
import jwt from 'jsonwebtoken';

const usersRef = collection(db, 'users');

class TokenService {

  public generateTokens(payload: string) {
    const accessToken = jwt.sign({ id: payload }, process.env.JWT_ACCESS_SECRET, { expiresIn: '15min' });
    const refreshToken = jwt.sign({ id: payload }, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
    return { accessToken, refreshToken };
  }

  public async saveToken(userId: string, refreshToken: string) {
    try {
      const userRef = doc(usersRef, userId);
      await updateDoc(userRef, { refreshToken });
    } catch (e) {
      console.log(e);
    }

  }

}

export default new TokenService();