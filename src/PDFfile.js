import React from 'react';
import { Page, Text, Image, Document, StyleSheet, Font } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    boldtext: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
        fontWeight: "bold"
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
})

const PDFFile = (props) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.text}>B.S.{props.Program}</Text>
                <Text style={styles.boldtext}>{props.CourseNumber} {props.CourseName} {props.Required}</Text>
                <Text style={styles.text}>{props.CreditHours}, {props.ContactHours}</Text>
                <Text style={styles.text}>Course Coordinator: {props.Coordinator}</Text>
                <Text style={styles.text}>Textbook: {props.Book}</Text>
                <Text style={styles.text}>Catalog Description: {props.CourseDescription}</Text>
                <Text style={styles.text}>Prerequisite(s): {props.Prerequisites}</Text>
                <Text style={styles.text}>Course Outcomes: Blah blah blah</Text>
                <Text style={styles.text}>CourseOutcome1: {props.CourseOutcome1}</Text>
                <Text style={styles.text}>CourseOutcome2: {props.CourseOutcome2}</Text>
                <Text style={styles.text}>CourseOutcome3: {props.CourseOutcome3}</Text>
                <Text style={styles.text}>CourseOutcome4: {props.CourseOutcome4}</Text>
                <Text style={styles.text}>CourseOutcome5: {props.CourseOutcome5}</Text>
                <Text style={styles.text}>CourseOutcome6: {props.CourseOutcome6}</Text>
                <Text style={styles.text}>CourseOutcome7: {props.CourseOutcome7}</Text>
                <Text style={styles.text}>CourseOutcome8: {props.CourseOutcome8}</Text>
                <Text style={styles.text}>CourseOutcome9: {props.CourseOutcome9}</Text>
                <Text style={styles.text}>Relationship between Course Outcomes and Student Outcomes for {props.Program}:</Text>
                <Text style={styles.text}> -- OUTCOME TABLE GOES HERE</Text>
                <Text style={styles.text}>Brief list of topics to be covered</Text>
                <Text style={styles.text}>{props.Topics}</Text>
            </Page>
        </Document>
    )
}

export default PDFFile;