import { EntityRepository, Repository } from "typeorm";
import { user } from "../entities/user";


@EntityRepository(user)
class UsersRepository extends Repository<user> {
    static findOne(arg0: { email: string; }) {
        throw new Error("Method not implemented.");
    }
}

export {UsersRepository};