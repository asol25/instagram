import { Entity, ObjectIdColumn, Column, ObjectID } from 'typeorm';

@Entity()
export class Newsfeed {
    @ObjectIdColumn()
    _id: ObjectID

    @Column()
    id: string

    @Column()
    likes: Object[]

    @Column()
    comment: Object[]

    @Column()
    img: string[]

    constructor(likes: Object[], comment: Object[], img: string[]) {
        this.likes = likes;
        this.comment = comment;
        this.img = img;
    }
}