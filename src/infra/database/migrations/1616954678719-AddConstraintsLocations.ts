import {MigrationInterface, QueryRunner} from "typeorm";

export class AddConstraintsLocations1616954678719 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await Promise.all([
            queryRunner.query('ALTER TABLE "countries" ADD CONSTRAINT "countries_locations_fk" FOREIGN KEY ("id") REFERENCES "locations"("id")'),
            queryRunner.query('ALTER TABLE "states" ADD CONSTRAINT "states_locations_fk" FOREIGN KEY ("id") REFERENCES "locations"("id")'),
            queryRunner.query('ALTER TABLE "cities" ADD CONSTRAINT "cities_locations_fk" FOREIGN KEY ("id") REFERENCES "locations"("id")'),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await Promise.all([
            queryRunner.query('ALTER TABLE "countries" DROP CONSTRAINT "countries_locations_fk"'),
            queryRunner.query('ALTER TABLE "states" DROP CONSTRAINT "states_locations_fk"'),
            queryRunner.query('ALTER TABLE "cities" DROP CONSTRAINT "cities_locations_fk"'),
        ]);
    }
}
