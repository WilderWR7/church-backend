import { Column, DeleteDateColumn, PrimaryColumn } from 'typeorm';

export class User {
  @PrimaryColumn('text', { unique: true })
  id: string;
  @Column('text', { select: false })
  password: string;
  @Column('text', { select: false })
  firstName: string;
  @Column('text', { select: false })
  lastName: string;
  @Column('boolean', { default: true, select: false })
  isActive: boolean;
  @Column('text', { nullable: false })
  rol: string;
  @DeleteDateColumn()
  deletedAt?: Date;
}
