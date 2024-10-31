"use client";
import React, { useEffect, useState } from "react";
import {
  Page,
  Document,
  Text,
  View,
  StyleSheet,
  Font,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { decryptQrCode, encryptQrCode } from "@/helper/function";
import logo from "@/public/assets/img/logo.png";
import QrCodeGenerator from "../QrCode/QrCodeGenerator";

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  details: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  clientName: {
    fontSize: 18,
    fontWeight: "bold",
    width: "100vw",
    fontFamily: "Open Sans",
  },
  address: {
    fontSize: 12,
    fontFamily: "Open Sans",
  },
  signature: {
    fontSize: 14,
    fontFamily: "Open Sans",
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 20,
    marginRight: 60,
  },
  header: {
    width: "100%",
    height: 80,
    borderBottom: "0.5px solid gray",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerAddress: {
    fontSize: 10,
    fontFamily: "Open Sans",
  },
});

interface ReceiptPDFViewerProps {
  data?: any;
  items?: any;
  total?: number;
}

const ReceiptPDFViewer = ({ data, items, total }: ReceiptPDFViewerProps) => {
  const encrypted = encryptQrCode({ type: "receipt", id: data.id });
  const [src, setSrc] = useState<any>("");

  useEffect(() => {
    const canvas = document.getElementById(
      "qr-code-to-pdf"
    ) as HTMLCanvasElement;
    if (canvas) {
      const dataURL = canvas.toDataURL("image/png");
      setSrc(dataURL);
    } else {
      console.log("Component not Mounted");
    }
  }, [src]);
  return (
    <>
      {/* <div className="mt-20" /> */}
      <div className="w-full h-[90vh]">
        <div className="hidden">
          <QrCodeGenerator id="qr-code-to-pdf" value={encrypted} size={150} />
        </div>
        <PDFViewer width="100%" height="100%">
          <Document title="Invoice">
            <Page size="A4" style={styles.page}>
              {/* --------------------------------
                        HEADER
            ------------------------------------*/}
              <View style={styles.header}>
                <Image src={logo.src} style={{ width: 120 }} />
                <View>
                  <Text style={styles.headerAddress}>67 Antsinanina</Text>
                  <Text style={styles.headerAddress}>medi@sync.com</Text>
                  <Text style={styles.headerAddress}>032 14 323 5678</Text>
                </View>
              </View>
              {/* --------------------------------
                        Name and Qr Code
            ------------------------------------*/}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={styles.clientName}>{data?.lastName}</Text>
                  <Text style={styles.clientName}>{data?.firstName}</Text>
                </View>
                {src !== "" && (
                  <Image
                    src={src}
                    style={{ width: 100, marginRight: 10 }}
                    cache={false}
                    // alt="qr code"
                  />
                )}
              </View>
              <View style={{ margin: 20 }} />

              {/* --------------------------------
                        Invoice Details
          ------------------------------------*/}
              <View style={styles.details}>
                <View>
                  <TitleWithInfo
                    title="Invoice Date"
                    info={data?.receipts[0]?.date}
                  />
                  <TitleWithInfo title="Invoice Number" info="1434567" />
                </View>

                {/* --------------------------------
                   Address, email, phone
            ------------------------------------*/}
                <View>
                  <Text style={styles.address}>{data?.address}</Text>
                  <Text style={styles.address}>{data?.secondAddress}</Text>
                  <Text style={styles.address}>{data?.email}</Text>
                  <Text style={styles.address}>{data?.tel}</Text>
                </View>
              </View>
              <View style={{ marginHorizontal: 20 }} />
              {/* -----------------------
                  Table 
            ---------------------------*/}
              <View>
                <TableHeader />
                {items?.map((item: any, index: any) => (
                  <TableList
                    key={index}
                    name={item?.name}
                    quantity={item?.quantity}
                    price={item?.price}
                  />
                ))}
              </View>
              <View>
                <TableHeaderTotal />
                <TableTotal total={total} />
              </View>
              {/* -----------------------
                  Signature
            ---------------------------*/}
              <View>
                <Text style={styles.signature}>Signature</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </>
  );
};

export default ReceiptPDFViewer;

type TitleWithInfoProps = {
  title: string;
  info: string;
};

const TitleWithInfo = ({ title, info }: TitleWithInfoProps) => {
  const styles = StyleSheet.create({
    first: {
      fontSize: 14,
      fontFamily: "Open Sans",
    },
    second: { fontSize: 14, fontWeight: "bold", fontFamily: "Open Sans" },
  });

  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.first}>{title}: </Text>
      <Text style={styles.second}>{info}</Text>
    </View>
  );
};

const TableHeader = () => {
  const tableHeaderStyle = StyleSheet.create({
    header: {
      fontSize: 12,
      textTransform: "uppercase",
      fontWeight: 600,
      fontFamily: "Open Sans",
    },
  });
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        marginTop: 40,
        marginBottom: 15,
      }}
    >
      <Text style={{ ...tableHeaderStyle.header, width: "10%" }}>Qty</Text>
      <Text style={{ ...tableHeaderStyle.header, width: "50%" }}>
        Description
      </Text>
      <Text style={{ ...tableHeaderStyle.header, width: "20%" }}>Price</Text>
      <Text style={{ ...tableHeaderStyle.header, width: "20%" }}>Subtotal</Text>
    </View>
  );
};
const TableList = (props: any) => {
  const tableListStyle = StyleSheet.create({
    list: {
      fontSize: 10,
      fontFamily: "Open Sans",
    },
  });
  return (
    <View style={{ flexDirection: "row", width: "100%", marginTop: 10 }}>
      <Text
        style={{
          ...tableListStyle.list,
          width: "10%",
          paddingLeft: 10,
        }}
      >
        {props?.quantity}
      </Text>
      <Text style={{ ...tableListStyle.list, width: "50%" }}>
        {props?.name}
      </Text>
      <Text style={{ ...tableListStyle.list, width: "20%" }}>
        {props?.price}
      </Text>
      <Text
        style={{
          ...tableListStyle.list,
          width: "20%",
          fontWeight: "bold",
          paddingLeft: 10,
        }}
      >
        {props?.price * props?.quantity}
      </Text>
    </View>
  );
};

const TableHeaderTotal = () => {
  const styles = StyleSheet.create({
    header: {
      fontSize: 12,
      textTransform: "uppercase",
      fontWeight: "bold",
      fontFamily: "Open Sans",
    },
  });
  return (
    <View style={{ flexDirection: "row", width: "100%", marginTop: 40 }}>
      <Text style={{ ...styles.header, width: "10%" }}></Text>
      <Text style={{ ...styles.header, width: "50%" }}>Due Date</Text>
      <Text style={{ ...styles.header, width: "20%" }}>Status</Text>
      <Text style={{ ...styles.header, width: "20%" }}>Total</Text>
    </View>
  );
};

const TableTotal = (props: any) => {
  const tableListStyle = StyleSheet.create({
    list: {
      fontSize: 14,
      fontFamily: "Open Sans",
      fontWeight: "bold",
    },
  });
  return (
    <View style={{ flexDirection: "row", width: "100%", marginTop: 10 }}>
      <Text
        style={{
          width: "10%",
        }}
      />
      <Text style={{ ...tableListStyle.list, width: "50%" }}>
        November 5th, 2023
      </Text>
      <Text style={{ ...tableListStyle.list, width: "20%", color: "green" }}>
        Paid
      </Text>
      <Text
        style={{
          ...tableListStyle.list,
          width: "20%",
          fontWeight: "bold",
        }}
      >
        {props.total}
      </Text>
    </View>
  );
};
