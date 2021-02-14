import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column } from "typeorm";

export enum EventStatus {
    PENDIENTE_DE_APROBAR = "pending",
    APROBADO = "approved",
    DENEGADO = "denied"
}

@Entity('event')
export class Event {

    @Column()
    name: string = '';
    @Column()
    description: string = '';
    @Column("timestamp")
    date: Date = new Date();
    @Column()
    contact: string = '';
    @CreateDateColumn({ name: 'timestampsubmitted' })
    timestampSubmitted: Date = new Date();
    @Column({ name: 'usersubmitted' })
    userSubmitted: string = '';
    @Column({ type: 'enum', enum: EventStatus })
    status: string = '';

    @PrimaryGeneratedColumn()
    id: number = 0;
}