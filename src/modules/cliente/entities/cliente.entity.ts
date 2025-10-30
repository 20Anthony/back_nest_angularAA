import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pedido } from "../../pedido/entities/pedido.entity";

@Entity('cliente')
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_completo: string;

    @Column()
    dni: string;

    @Column()
    telefono: string;

    // Relación 1 -> N
    @OneToMany(() => Pedido, pedido => pedido.cliente)
    pedidos: Pedido[];
}
