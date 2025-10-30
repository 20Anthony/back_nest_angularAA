import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CategoriaModule } from './categoria/categoria.module';
import { PersonaModule } from './persona/persona.module';
import { ProductoModule } from './producto/producto.module';
import { RoleModule } from './role/role.module';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [UsersModule, CategoriaModule, PersonaModule, ProductoModule, RoleModule, ClienteModule, PedidoModule]
})
export class ModulesModule {}
