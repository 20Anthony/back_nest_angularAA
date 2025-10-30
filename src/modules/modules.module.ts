import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CategoriaModule } from './categoria/categoria.module';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [UsersModule, CategoriaModule, PersonaModule]
})
export class ModulesModule {}
