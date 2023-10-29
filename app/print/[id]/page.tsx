import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { QRCode } from "react-qrcode-logo";

export default function SingleID() {
  return (
    <Page size="A4">
      <View style={{ display: "flex", flexDirection: "column" }}>
        <TitleWithSub title="First Name" subtitle="Nick" />
        <TitleWithSub title="Last Name" subtitle="Andriam" />
      </View>
      {/* <QRCode value="1234578" /> */}
    </Page>
  );
}

const TitleWithSub = (props: any) => (
  <View>
    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{props?.title}: </Text>
    <Text style={{ fontSize: 18 }}>{props?.subtitle}</Text>
  </View>
);
