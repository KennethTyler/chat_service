import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { idText } from "typescript";

export class CreateMessages1619757216565 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Messages",
                columns: [
                    {
                        name : "id",
                        type : "uuid",
                        isPrimary: true
                    },
                    {
                        name : "admin_id",
                        type : "uuid",
                        isNullable: true
                    },
                    {
                        name : "user_id",
                        type: "uuid"
                    },
                    {
                        name : "text",
                        type : "varchar"
                    },
                    {
                        name : "created_at",
                        type: "timestamp",
                        default: "now()"
                    }

                    
                ],
                foreignKeys: [
                    {
                        name : "FKUser",
                        referencedTableName: "users", 
                        referencedColumnNames: ["id"],
                        columnNames : ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages")
    }

}
