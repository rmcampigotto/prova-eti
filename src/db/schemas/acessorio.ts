import { pgTable, varchar, integer, serial, foreignKey } from "drizzle-orm/pg-core";
import { veiculo } from "./veiculo";
import { relations } from "drizzle-orm";

export const acessorio = pgTable("acessorio", {
  id:serial().primaryKey(),
  nome:varchar("nome"),
  id_veiculo:integer().references(() => veiculo.id)
});

export const acessorioRelations = relations(acessorio, ({ one }) => ({
  author: one(veiculo, {
    fields: [acessorio.id_veiculo],
    references: [veiculo.id],
  }),
}));