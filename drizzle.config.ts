import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
    schema:"./src/db/schemas",
    dialect:"postgresql",
    dbCredentials:{
        url: "postgresql://prova:prova123@localhost:5432/provadb",
    },
});