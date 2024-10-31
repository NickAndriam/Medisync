import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import nodeHtmlToImage from "node-html-to-image";
import QrCodeGenerator from "@/components/QrCode/QrCodeGenerator";
import { QRCode } from "react-qrcode-logo";

// const handler = (req: NextApiRequest, res: NextApiResponse) => {
//   res.status(200).json({ name: "John Doe" });
//   // res.status(200).json({ imageUrls });
// };

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const qrCode = new QRCode({
    value: "12345",
    size: 150,
    qrStyle: "dots",
  });

  nodeHtmlToImage({
    output: "./image.png",
    html: `"<div>test</div>"`,
  }).then((e) => {
    console.log("The image was created successfully!");
  });
  return NextResponse.json({ name: "John Doe" });
}
