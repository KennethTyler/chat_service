import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/user";


@EntityRepository(User)
class UsersRepository extends Repository<User> {
    static findOne(arg0: { email: string; }) {
        throw new Error("Method not implemented.");
    }
}

export {UsersRepository};