import { Entity, Column } from "typeorm"

@Entity()
export class Profile {
    @Column()
    fullname: Object[]

    @Column()
    flowing: Object[]

    @Column()
    flower: Object[]
}