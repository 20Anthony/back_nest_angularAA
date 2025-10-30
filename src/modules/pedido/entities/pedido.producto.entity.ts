import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Pedido } from "./pedido.entity";
import { Producto } from "../../producto/entities/producto.entity";

@Entity('pedido_producto')
export class PedidoProducto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cantidad: number;

  @ManyToOne(() => Pedido, pedido => pedido.pedidoProducto)
  @JoinColumn({ name: 'pedido_id' }) // genera columna pedido_id
  pedido: Pedido;

  @ManyToOne(() => Producto, producto => producto.pedidoProducto)
  @JoinColumn({ name: 'producto_id' }) // genera columna producto_id
  producto: Producto;
}
