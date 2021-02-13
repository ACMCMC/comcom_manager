import {Entity, PrimaryGeneratedColumn, CreateDateColumn, Column} from "typeorm";

@Entity('evento')
export class Event {

    @Column()
    name: string = '';
    @Column()
    description: string = '';
    @Column("timestamp")
    date: Date = new Date();
    @Column()
    contact: string = '';
    @CreateDateColumn()
    timestampSubmitted: Date = new Date();
    @Column()
    userSubmitted: string = '';
    @Column()
    status: string = '';

    @PrimaryGeneratedColumn()
    id: number = 0;
}