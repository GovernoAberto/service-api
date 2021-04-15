import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertLocations1616954669382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await Promise.all([
            queryRunner.query("INSERT INTO locations(id, sphere) SELECT id, 'country' FROM countries"),
            queryRunner.query("INSERT INTO locations(id, sphere) SELECT id, 'state' FROM states"),
            queryRunner.query("INSERT INTO locations(id, sphere) SELECT id, 'cities' FROM cities"),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM locations");
    }

}
