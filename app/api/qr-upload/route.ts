// api/qr-upload.ts
import { NextApiRequest, NextApiResponse } from "next";
import { decode } from "base64-arraybuffer";

const apiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Assuming you have the file data in req.body.imageData
    const base64ImageData = req.body.imageData;
    const imageBuffer = decode(base64ImageData);

    // Assuming you have the QR code decoding logic here
    const qrCodeValue = decodeQRCode(imageBuffer);

    res.status(200).json({ imageBuffer });
  } catch (error) {
    console.error("Error processing the uploaded file:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const config = {
  api: {
    bodyParser: true, // Use the default body parser
  },
};

export default apiHandler;

function decodeQRCode(imageBuffer: ArrayBuffer): string {
  // Implement your QR code decoding logic here
  // You may use a library like jsQR or any other suitable library for decoding QR codes.
  // Return the decoded value as a string.
  // For example, you can return a placeholder value for now:
  return "Your decoded QR code value";
}
