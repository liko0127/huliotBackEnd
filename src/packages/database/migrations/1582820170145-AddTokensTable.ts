import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import config from '~/config'
import { withTimestampsMigration } from '~/packages/database/helpers/withTimestampsMigration'
const tableName = `${config.DB.MAIN_SCHEMA}.tokens`

export class AddTokensTable1582820170145 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table(
        withTimestampsMigration({
          columns: [
            {
              isPrimary: true,
              name: 'tokenId',
              type: 'int4'
            },
            {
              name: 'network',
              type: 'varchar',
            },
            {
              name: 'contentUrl',
              type: 'varchar',
            },
            {
              name: 'title',
              type: 'varchar'
            },
            {
              name: 'description',
              type: 'varchar'
            },
            {
              name: 'imageUrl',
              type: 'varchar'
            },
            {
              name: 'resizableImageUrl',
              type: 'varchar'
            },
            {
              name: 'ownerId',
              type: 'varchar'
            },
            {
              isNullable: true,
              name: 'url',
              type: 'varchar',
            },
            {
              isNullable: true,
              name: 'groupId',
              type: 'int4',
            },
            {
              name: 'source',
              type: 'varchar'

            },
          ],
          name: tableName,
        }),
      ),
    )
    await queryRunner.query(`select * from ${tableName}`)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(`${tableName}`)
  }
}

