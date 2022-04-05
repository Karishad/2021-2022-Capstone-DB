// Table.js will be used for table creation of outcomes in PDFfile.js
import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    },
});

// Replace data will props of outcomes
const OutcomesTable = ({ data }) => (
    <View style={styles.tableContainer}>
    {/*<TableHeader />*/}
    <TableRow items={data.items} />
    {/*<TableFooter items={data.items} />*/}
    </View>
);

export default ItemsTable;