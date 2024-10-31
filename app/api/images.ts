// pages/api/images.js

import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const imagesDirectory = path.join(process.cwd(), "assets/img"); // Change the path to your image directory
  const imageFiles = fs.readdirSync(imagesDirectory);

  const imageUrls = imageFiles.map((file) => `/images/${file}`);

  res.status(200).json({ name: "John Doe" });
  // res.status(200).json({ imageUrls });
};

export default handler;
