import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm"

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    username: string
    

    @Column()
    password: string

    @Column()
    token: string

    // constructor(id: ObjectID, firstName: string, lastName: string) {
    //     this.id = id;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
}