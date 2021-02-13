import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('evento')
export class Event {

    @Column()
    name: string = '';
    @Column()
    description: string = '';
    @Column()
    date: Date = new Date();
    @Column()
    contact: string = '';
    @Column()
    timestampSubmitted: Date = new Date();
    @Column()
    userSubmitted: string = '';
    @Column()
    status: string = '';

    @PrimaryGeneratedColumn()
    id: number = 0;
}