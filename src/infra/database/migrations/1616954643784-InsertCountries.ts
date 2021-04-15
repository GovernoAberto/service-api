import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertCountries1616954643784 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO countries(id, alias, name, initials) VALUES(1, 'br', 'Brasil', 'BR')");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM countries");
    }

}
