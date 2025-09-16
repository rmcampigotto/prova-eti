import { relations } from "drizzle-orm";
import { pgTable, varchar, integer, serial } from "drizzle-orm/pg-core";
import { acessorio } from "./acessorio";

export const veiculo = pgTable("veiculo", {
  id:serial("id").primaryKey(),
  modelo:varchar("nome").notNull(),
  anoFabricacao:integer("anoFabricacao").notNull(),
  placa:varchar("placa").notNull()
});

export const veiculoRelations = relations(veiculo, ({ many }) => ({
	posts: many(acessorio),
}));