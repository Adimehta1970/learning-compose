import express from "express";
import { PrismaClient } from "../prisma/generated/prisma";

const app = express();
const prismaClient = new PrismaClient();
app.use(express.json());

app.get("/", async (req, res) => {
  const data = await prismaClient.user.findMany();
  res.json({
    data,
  });
});

app.post("/", async (req, res) => {
  const { username, password } = req.body;
  const data = await prismaClient.user.create({
    data: {
      username,
      password,
    },
  });
  res.json({
    data,
  });
});

app.listen(3000);
