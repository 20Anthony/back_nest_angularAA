import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePedidoproductoTable1761868450291 implements MigrationInterface {
    name = 'CreatePedidoproductoTable1761868450291'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pedido_producto" ("id" SERIAL NOT NULL, "cantidad" integer NOT NULL, "pedido_id" integer, "producto_id" integer, CONSTRAINT "PK_97f69aaf286bdd82afbd487e4d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" ADD CONSTRAINT "FK_3d683a14b23ae2025106e902427" FOREIGN KEY ("pedido_id") REFERENCES "pedido"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" ADD CONSTRAINT "FK_4b4ffec1fe4c8892fcfdd257c1a" FOREIGN KEY ("producto_id") REFERENCES "productos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido_producto" DROP CONSTRAINT "FK_4b4ffec1fe4c8892fcfdd257c1a"`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" DROP CONSTRAINT "FK_3d683a14b23ae2025106e902427"`);
        await queryRunner.query(`DROP TABLE "pedido_producto"`);
    }

}
