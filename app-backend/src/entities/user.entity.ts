import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserRole } from './user-role.entity';
import { RequestApproval } from './request-approval.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  username: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ type: 'uuid', nullable: true })
  role_id: string;

  @ManyToOne(() => UserRole, (role: UserRole) => role.users)
  @JoinColumn({ name: 'role_id' })
  role: UserRole;

  @Column({ type: 'varchar', length: 255, nullable: true })
  fullname: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @OneToMany(() => RequestApproval, (request: RequestApproval) => request.user)
  request_approvals: RequestApproval[];
}
