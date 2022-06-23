import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { User } from "../../model/Entity/users";
import { privateKey } from '../../middleware/config';

export const sendRefreshToken = (user: User): string => {
    return jwt.sign({ user: user.username }, privateKey.secret,
        { expiresIn: "1h" });
}

export const insertInformation = async (options: User): Promise<User> => {
    const user = new User();
    const saltRounds = 8;
    user.username = options.username;
    user.password = await bcrypt.hash(options.password, saltRounds);
    user.token = await sendRefreshToken(user);
    return user;
}

export const comparePassword = (LoginPassword: string, CheckPasswords: string): boolean => {
    return bcrypt.compareSync(LoginPassword, CheckPasswords, function (err, result) {
        if (err) {
            console.error(err);
            return false
        };
        return true;
    });
}