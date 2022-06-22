import { User } from './Entity/users';
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    name: "default",
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "social-media",
    entities: [User],
})

export const initialize = () => {
    AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!")

        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        })

    console.log(AppDataSource.initialize());
}