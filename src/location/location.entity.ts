import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Location {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    zip: number;
}