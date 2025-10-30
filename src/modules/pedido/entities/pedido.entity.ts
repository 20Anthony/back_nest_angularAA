import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Cliente } from "../../cliente/entities/cliente.entity";
import { PedidoProducto } from "./pedido.producto.entity";

@Entity('pedido')
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: string;

    @Column()
    estado: string;

    @Column()
    observaciones: string;

    // Relación N -> 1
    @ManyToOne(() => Cliente, cliente => cliente.pedidos)
    @JoinColumn({ name: 'cliente_id' })
    cliente: Cliente;

    @OneToMany(()=>PedidoProducto,pedprod=>pedprod.pedido )
    pedidoProducto: PedidoProducto[];
}

