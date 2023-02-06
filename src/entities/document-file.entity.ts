import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class DocumentsFiles {
	@PrimaryGeneratedColumn()
	id: number | undefined;

	@Column({
		type: 'varchar',
		nullable: true,
	})
	frontCard: string | undefined;

	@Column({
		type: 'varchar',
		nullable: true,
	})
	selfie: string | undefined;

	@Column({
		type: 'varchar',
		nullable: true,
	})
	backCard: string | undefined;

	@CreateDateColumn({
		type: 'timestamptz',
	})
	createAt: Date | undefined;
}
