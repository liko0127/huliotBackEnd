// tslint:disable:variable-name
import { BaseEntity, Column, Entity,PrimaryColumn,PrimaryGeneratedColumn, Timestamp ,CreateDateColumn,UpdateDateColumn } from 'typeorm'
import config from '~/config'

@Entity(`${config.DB.MAIN_SCHEMA}.groups`)
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column('int4')
  public start: number

  @Column('int4')
  public width: number

  @Column('int4')
  public height: number

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()" })
  public created_at: Timestamp;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()", onUpdate: "CURRENT_TIMESTAMP()" })
  public updated_at: Timestamp;
}
