import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertStates1616954658789 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const sql = [];

        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(2, 1, 'ac', 'Acre', 'AC', 12)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(3, 1, 'al', 'Alagoas', 'AL', 27)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(4, 1, 'ap', 'Amapá', 'AP', 16)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(5, 1, 'am', 'Amazonas', 'AM', 13)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(6, 1, 'ba', 'Bahia', 'BA', 29)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(7, 1, 'ce', 'Ceará', 'CE', 23)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(8, 1, 'df', 'Distrito Federal', 'DF', 53)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(9, 1, 'es', 'Espírito Santo', 'ES', 32)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(10, 1, 'go', 'Goiás', 'GO', 52)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(11, 1, 'ma', 'Maranhão', 'MA', 21)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(12, 1, 'mt', 'Mato Grosso', 'MT', 51)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(13, 1, 'ms', 'Mato Grosso do Sul', 'MS', 50)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(14, 1, 'mg', 'Minas Gerais', 'MG', 31)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(15, 1, 'pa', 'Pará', 'PA', 15)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(16, 1, 'pb', 'Paraíba', 'PB', 25)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(17, 1, 'pr', 'Paraná', 'PR', 41)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(18, 1, 'pe', 'Pernambuco', 'PE', 26)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(19, 1, 'pi', 'Piauí', 'PI', 22)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(20, 1, 'rj', 'Rio de Janeiro', 'RJ', 33)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(21, 1, 'rn', 'Rio Grande do Norte', 'RN', 24)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(22, 1, 'rs', 'Rio Grande do Sul', 'RS', 43)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(23, 1, 'ro', 'Rondônia', 'RO', 11)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(24, 1, 'rr', 'Roraima', 'RR', 14)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(25, 1, 'sc', 'Santa Catarina', 'SC', 42)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(26, 1, 'sp', 'São Paulo', 'SP', 35)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(27, 1, 'se', 'Sergipe', 'SE', 28)"));
        sql.push(queryRunner.query("INSERT INTO states(id, country_id, alias, name, initials, ibge_code) VALUES(28, 1, 'to', 'Tocantins', 'TO', 17)"));

        await Promise.all(sql);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM states");
    }

}
