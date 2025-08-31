// src/pages/api/tekateki.js
import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  try {
    // Lokasi file tekateki.json
    const filePath = path.join(process.cwd(), "src", "json", "tekateki.json");

    // Baca file
    const fileContent = await fs.readFile(filePath, "utf8");

    // Parse JSON
    const data = JSON.parse(fileContent);

    // Kirim response
    res.status(200).json({
      success: true,
      message: "Berhasil ambil data tekateki",
      data,
    });
  } catch (err) {
    // Kalau error, tampilkan detail di log
    console.error("API Error:", err.message);

    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      details: err.message,
    });
  }
    }
