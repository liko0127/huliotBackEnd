import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import config from '~/config'
import { withTimestampsMigration } from '~/packages/database/helpers/withTimestampsMigration'
const tableName = `${config.DB.MAIN_SCHEMA}.groups`
export class groups1646311985172 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table(
            withTimestampsMigration({
                columns: [
                    {
                        isPrimary: true,
                        isGenerated:true,
                        name: 'id',
                        type: 'int4'
                    },
                    {
                        name: 'start',
                        type: 'int4',
                    },
                    {
                        name: 'width',
                        type: 'int4',
                    },
                    {
                        name: 'height',
                        type: 'int4',
                    }
                ],
                name: tableName,
            }),
          ),
        )
        await queryRunner.query(`select * from ${tableName}`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
