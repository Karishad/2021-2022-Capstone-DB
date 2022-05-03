// Table.js will be used for table creation of outcomes in PDFfile.js
import React from "react";
import { StyleSheet, View, Text } from "@react-pdf/renderer";
import { borderRight, fontSize } from "@mui/system";
//import { style } from "@mui/system";

const styles = StyleSheet.create({
    table: {
      marginLeft: 60,
      marginRight: 60,
      marginTop: 8,
      marginBottom: 8,
      borderTop: '1px solid #000',
      borderRight: '1px solid #000',
      borderLeft: '1px solid #000',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      borderBottom: '1px solid #000',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      fontFamily: 'Times-Roman',
      fontSize: 12
    },
    header: {
      borderBottom: '1px solid #000'
    },
    mapping: {
      width: '30%',
    },
    outcome: {
      width: '70%',
    },
  })
  
  const OutcomesTable = ({ data }) => {
    return (
      <View style={styles.table}>
        <View style={[styles.row, styles.header]}>
          <Text style={styles.mapping}>Course Outcome</Text>
          <Text style={styles.outcome}>Student Outcomes</Text>
        </View>
        {data.StudentOutcome1 ? 
            <View style={styles.row} wrap={true}>
              <Text style={styles.mapping}>{data.Student1}</Text>
              <Text style={styles.outcome}>1. {data.StudentOutcome1}</Text>
              </View> : null}
        {data.StudentOutcome2 ? 
            <View style={styles.row} wrap={true}>
              <Text style={styles.mapping}>{data.Student2}</Text>
              <Text style={styles.outcome}>2. {data.StudentOutcome2}</Text>
              </View> : null}
        {data.StudentOutcome3 ? 
            <View style={styles.row} wrap={true}>
              <Text style={styles.mapping}>{data.Student3}</Text>
              <Text style={styles.outcome}>3. {data.StudentOutcome3}</Text>
              </View> : null}
        {data.StudentOutcome4 ? 
            <View style={styles.row} wrap={true}>
              <Text style={styles.mapping}>{data.Student4}</Text>
              <Text style={styles.outcome}>4. {data.StudentOutcome4}</Text>
              </View> : null}
        {data.StudentOutcome5 ? 
            <View style={styles.row} wrap={true}>
              <Text style={styles.mapping}>{data.Student5}</Text>
              <Text style={styles.outcome}>5. {data.StudentOutcome5}</Text>
              </View> : null}
        {data.StudentOutcome6 ? 
            <View style={styles.row} wrap={true}>
              <Text style={styles.mapping}>{data.Student6}</Text>
              <Text style={styles.outcome}>6. {data.StudentOutcome6}</Text>
              </View> : null}
        {data.StudentOutcome7 ? 
            <View style={styles.row} wrap={true}>
              <Text style={styles.mapping}>{data.Student7}</Text>
              <Text style={styles.outcome}>7. {data.StudentOutcome7}</Text>
              </View> : null}
      </View>
    )
  }
  
  /*const styles = StyleSheet.create({
    tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    },
});

// Replace data will props of outcomes
const OutcomesTable = ({ data }) => (
    <View style={styles.tableContainer}>
    {//<TableHeader />}
    <TableRow items={data.items} />
    {//<TableFooter items={data.items} />} 
    </View>
);*/

export default OutcomesTable;