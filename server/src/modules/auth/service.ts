import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { User } from "../../model/Entity/users";
import { privateKey } from '../../middleware/auth/config';

export const sendRefreshToken = (user: User): string => {
    return jwt.sign({ user: user.username }, privateKey.secret,
        { expiresIn: "1h" });
}

export const insertInformation = async (options: User): Promise<User> => {
    const user = new User();
    user.id = (user._id as any);
    user.username = options.username;
    const saltRounds = 8;
    user.password = await bcrypt.hash(options.password, saltRounds);
    user.token = sendRefreshToken(user);
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