import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
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
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
}
