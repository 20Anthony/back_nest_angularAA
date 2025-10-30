import { User } from "../../user/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @OneToOne(() => User, user => user.persona)
    @JoinColumn()
    user: User;
}
