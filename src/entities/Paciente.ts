import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class Paciente{
    
    @PrimaryGeneratedColumn()
    id: number=0;

    @Column()
    dni: string='000';

    @Column()
    apellido: string='Nadie';

    @Column()
    nombre: string='Nadie';

    
}