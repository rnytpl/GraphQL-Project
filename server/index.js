import dotenv from "dotenv";
dotenv.config();

import colors from "colors";
const PORT = process.env.PORT || 5000;
import express from "express";
const app = express();
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema.js";
import { connectDB } from "./config/db.js";

// Connect to MongoDB
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
