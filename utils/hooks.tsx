import { usePathname, useRouter } from "next/navigation";
import ReactDOM from "react-dom";
import { useCallback, useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import domtoimage from "dom-to-image";
import QrCodeGenerator from "@/components/QrCode/QrCodeGenerator";
import nodeHtmlToImage from "node-html-to-image";
import ReactDOMServer from "react-dom/server";

// ----------------------
//      Extra
// ----------------------
export function useTimeInOneDay() {
  // Create an array list of time by hours in one day
  const hoursInDay = [];
  for (let hour = 1; hour <= 12; hour++) {
    hoursInDay.push(`${hour}:00 AM`);
  }

  for (let hour = 1; hour <= 12; hour++) {
    hoursInDay.push(`${hour}:00 PM`);
  }

  return hoursInDay;
}

// ---------------------------
//      Theme
//  -------------------------

export function useDarkTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const body = document.documentElement;
      const dataTheme = body.getAttribute("data-theme");

      if (dataTheme === "dark") {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return isDark;
}

// -------------------------
//       Hide Components
// -------------------------
export function useHideElement() {
  let isFound = false;
  const paths = ["/", "/login", "/signup", "/queue"];
  const currentPathname = usePathname();
  paths.find((path) =>
    path === currentPathname ? (isFound = true) : (isFound = false)
  );
  return isFound;
}

const converting = async (data: any) => {
  // nodeHtmlToImage({
  //   output: "./image.png",
  //   html: `${(<QrCodeGenerator value={data} size={200} />)}`,
  // }).then(() => {
  //   console.log("The image was created successfully!");
  // });
};
