// tslint:disable:variable-name
import { BaseEntity, Column, Entity,PrimaryColumn, Timestamp ,CreateDateColumn,UpdateDateColumn } from 'typeorm'
import config from '~/config'

@Entity(`${config.DB.MAIN_SCHEMA}.tokens`)
export class Token extends BaseEntity {
  @PrimaryColumn()
  public tokenId: number

  @Column('varchar')
  public network: string

  @Column('varchar')
  public contentUrl: string

  @Column('varchar')
  public title: string

  @Column('varchar')
  public description: string

  @Column('varchar')
  public imageUrl: string

  @Column('varchar')
  public resizableImageUrl: string

  @Column('varchar')
  public ownerId: string

  @Column('varchar')
  public url: string

  @Column('int4')
  public groupId: number

  @Column('varchar')
  public source: string

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()" })
  public created_at: Timestamp;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()", onUpdate: "CURRENT_TIMESTAMP()" })
  public updated_at: Timestamp;
}
