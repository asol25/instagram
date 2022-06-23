import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm"
import { Newsfeed } from './newsfeed';
import { Profile } from "./profile";
@Entity()
export class User {
    @ObjectIdColumn()
    _id: ObjectID

    @Column()
    id: string

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    token: string

    @Column((type) => Profile)
    profile: Profile

    @Column((type) => Newsfeed)
    newsfeed: Newsfeed[]
}