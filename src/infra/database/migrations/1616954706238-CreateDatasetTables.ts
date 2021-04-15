import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDatasetTables1616954706238 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" (
            "id" integer NOT NULL,
            "name" VARCHAR(255) NOT NULL,
            CONSTRAINT "tags_pk" PRIMARY KEY ("id")
          )`);
        await queryRunner.query(`CREATE TABLE "categories" (
            "id" integer NOT NULL,
            "name" VARCHAR(255) NOT NULL,
            CONSTRAINT "categories_pk" PRIMARY KEY ("id")
          )`);
    
        await queryRunner.query(`CREATE TABLE "dataset_sources" (
            "id" integer NOT NULL,
            "name" VARCHAR(255) NOT NULL UNIQUE,
            "url" VARCHAR(255) NOT NULL,
            CONSTRAINT "dataset_sources_pk" PRIMARY KEY ("id")
          )`);
    
        await queryRunner.query(`CREATE TABLE "dataset_apis" (
            "id" integer NOT NULL,
            "type" VARCHAR(10) NOT NULL,
            "url" VARCHAR(255) NOT NULL,
            CONSTRAINT "dataset_apis_pk" PRIMARY KEY ("id")
          )`);
    
        await queryRunner.query(`CREATE TABLE "datasets" (
            "id" integer NOT NULL,
            "alias" VARCHAR(30) NOT NULL, 
            "name" VARCHAR(255) NOT NULL,
            "sphere" CHAR(1) NOT NULL,
            "scope" CHAR(1) NOT NULL,
            "location_id" integer NOT NULL,
            "category_id" integer NOT NULL,
            "api_id" integer NOT NULL,
            "source_id" integer NOT NULL,
            "metadata" TEXT NOT NULL,
            CONSTRAINT "datasets_pk" PRIMARY KEY ("id"),
            CONSTRAINT "datasets_sources_fk" FOREIGN KEY ("source_id") REFERENCES "dataset_sources"("id"),
            CONSTRAINT "datasets_categories_fk" FOREIGN KEY ("category_id") REFERENCES "categories"("id"),
            CONSTRAINT "datasets_apis_fk" FOREIGN KEY ("api_id") REFERENCES "dataset_apis"("id"),
            CONSTRAINT "datasets_locations_fk" FOREIGN KEY ("location_id") REFERENCES "locations"("id")
          )`);
    
        await queryRunner.query(`CREATE TABLE "datasets_tags" (
            "dataset_id" integer NOT NULL,
            "tag_id" integer NOT NULL,
            CONSTRAINT "datasets_tags_pk" PRIMARY KEY ("dataset_id", "tag_id"),
            CONSTRAINT "datasets_tags_dataset_id_fk" FOREIGN KEY ("dataset_id") REFERENCES "datasets"("id"),
            CONSTRAINT "datasets_tags_tag_id_fk" FOREIGN KEY ("tag_id") REFERENCES "tags"("id")
          )`);
    
        await queryRunner.query(`CREATE TABLE "visualizations" (
            "id" integer NOT NULL,
            "dataset_id" integer NOT NULL,
            "parser" VARCHAR(10) NOT NULL,
            "type" VARCHAR(10) NOT NULL,
            "query" VARCHAR(255) NOT NULL,
            "config" VARCHAR(255) NOT NULL,
            "title" VARCHAR(255) NOT NULL,
            "metadata" TEXT NOT NULL,
            CONSTRAINT "visualizations_pk" PRIMARY KEY ("id"),
            CONSTRAINT "visualizations_dataset_id_fk" FOREIGN KEY ("dataset_id") REFERENCES "datasets"("id")
          )`);
    
        await queryRunner.query(`CREATE TABLE "visualizations_tags" (
            "visualization_id" integer NOT NULL,
            "tag_id" integer NOT NULL,
            CONSTRAINT "visualization_tags_pk" PRIMARY KEY ("visualization_id", "tag_id"),
            CONSTRAINT "visualization_tags_visualization_id_fk" FOREIGN KEY ("visualization_id") REFERENCES "visualizations"("id"),
            CONSTRAINT "visualization_tags_tag_id_fk" FOREIGN KEY ("tag_id") REFERENCES "tags"("id")
          )`);
    
        await queryRunner.query(`INSERT INTO dataset_sources(id, name, url) VALUES(1, 'Portal Brasileiro de Dados Abertos', 'https://dados.gov.br/')`);
        await queryRunner.query(`INSERT INTO dataset_sources(id, name, url) VALUES(2, 'Portal da Transparência', 'http://transparencia.gov.br/')`);
        await queryRunner.query(`INSERT INTO dataset_sources(id, name, url) VALUES(3, 'Portal da Transparência do Registro Cívil', 'https://transparencia.registrocivil.org.br/')`);
        await queryRunner.query(`INSERT INTO dataset_apis(id, type, url) VALUES(1, 'cubejs', 'https://localhost/')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('datasets_tags');
        await queryRunner.dropTable('visualizations_tags');
        await queryRunner.dropTable('visualizations');
        await queryRunner.dropTable('datasets');
        await queryRunner.dropTable('dataset_apis');
        await queryRunner.dropTable('dataset_sources');
        await queryRunner.dropTable('tags');
        await queryRunner.dropTable('categories');
    }

}
