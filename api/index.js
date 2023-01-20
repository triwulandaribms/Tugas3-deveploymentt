import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

const port = 3000;

const data = {
  nama: ["My Nick Name", "=", "Wulan"],

  batch: ["Batch", "=", "20 (Integer)"],

  No: ["Nim", "=", "02042111031"],

  semester: ["semester", "=", "3rd"],

  prodi: ["Prodi", "=", "D3 Manajemen Informatika"],

  fakultas: ["Faculty", "=", "Computer Science"],

  Language: ["Programming Language", "=", "**Node.JS**"],
};

app.get("/api/lihat", (_req, res) => {
  res.send(data);
});

app.listen(port, () => console.log("sedang dijalankan"));
