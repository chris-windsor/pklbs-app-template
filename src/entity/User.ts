import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  firstName: string;

  @Column({ default: '' })
  lastName: string;

  @Column()
  username: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  password: string;

  @Column({ default: '' })
  access_token: string;
}
