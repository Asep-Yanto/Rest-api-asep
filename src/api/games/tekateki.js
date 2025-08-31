import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "src/json/tekateki.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // ambil 1 soal random
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomSoal = data[randomIndex];

  // kirim langsung soal + jawaban
  res.status(200).json(randomSoal);
}
