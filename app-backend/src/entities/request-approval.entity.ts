import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { ApprovalCategory } from './approval-category.entity';

@Entity('request_approval')
export class RequestApproval {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  request_title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  purpose: string;

  @Column({ type: 'int', nullable: true })
  user_id: number;

  @ManyToOne(() => User, (user: User) => user.request_approvals)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'int', nullable: true })
  approval_category_id: number;

  @ManyToOne(() => ApprovalCategory, (category: ApprovalCategory) => category.request_approvals)
  @JoinColumn({ name: 'approval_category_id' })
  approval_category: ApprovalCategory;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;
}
