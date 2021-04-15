import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLocationTables1616954401940 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await Promise.all([
        queryRunner.query(`
          CREATE TABLE "locations" (
            "id" integer NOT NULL,
            "sphere" VARCHAR(15) NOT NULL,
            CONSTRAINT "locations_pk" PRIMARY KEY ("id")
          )`),
        queryRunner.query(`
          CREATE TABLE "countries" (
            "id" integer NOT NULL,
            "alias" VARCHAR(255) NOT NULL UNIQUE,
            "name" VARCHAR(255) NOT NULL,
            "initials" CHAR(2) NOT NULL,
            CONSTRAINT "countries_pk" PRIMARY KEY ("id")
          )`),
        queryRunner.query(`
          CREATE TABLE "states" (
            "id" integer NOT NULL,
            "alias" VARCHAR(255) NOT NULL UNIQUE,
            "country_id" integer NOT NULL,
            "name" VARCHAR(255) NOT NULL,
            "initials" VARCHAR(2) NOT NULL,
            "ibge_code" integer NOT NULL UNIQUE,
            CONSTRAINT "states_pk" PRIMARY KEY ("id"),
            CONSTRAINT "states_countries_fk" FOREIGN KEY ("country_id") REFERENCES "countries"("id")
          )`),
        queryRunner.query(`
          CREATE TABLE "cities" (
            "id" integer NOT NULL,
            "alias" VARCHAR(255) NOT NULL,
            "state_id" integer NOT NULL,
            "name" VARCHAR(255) NOT NULL,
            "ibge_code_city" integer NOT NULL,
            "ibge_code" integer NOT NULL UNIQUE,
            "siafi_code" integer NOT NULL UNIQUE,
            CONSTRAINT "cities_pk" PRIMARY KEY ("id"),
            CONSTRAINT "cities_states_fk" FOREIGN KEY ("state_id") REFERENCES "states"("id")
          )`),
        queryRunner.query(`
          CREATE TABLE "zip_codes" (
            "city_id" integer NOT NULL,
            "range_start" integer NOT NULL,
            "range_end" integer NOT NULL,
            UNIQUE(city_id, range_start, range_end),
            CONSTRAINT "zip_codes_cities_fk" FOREIGN KEY ("city_id") REFERENCES "cities"("id")
          )`)
      ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE zip_codes');
      await queryRunner.query('DROP TABLE cities');
      await queryRunner.query('DROP TABLE states');
      await queryRunner.query('DROP TABLE countries');
      await queryRunner.query('DROP TABLE locations');
    }
}