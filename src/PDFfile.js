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
                <Text style={styles.text}>B.S. - {props.Program}</Text>
                <Text style={styles.boldtext}>{props.CourseNumber} {props.CourseName} {props.Required}</Text>
                <Text style={styles.text}>{props.CreditHours}, {props.ContactHours}</Text>
                <Text style={styles.text}>Course Coordinator: {props.Coordinator}</Text>
                <Text style={styles.text}>Textbook: {props.Book}</Text>
                <Text style={styles.text}>Catalog Description: {props.CourseDescription}</Text>
                <Text style={styles.text}>Prerequisite(s): {props.Prerequisites}</Text>
                <Text style={styles.text}>Course Outcomes: Blah blah blah</Text>
                <Text style={styles.text}>CourseOutcome1: {props.Outcome1}</Text>
                <Text style={styles.text}>CourseOutcome2: {props.Outcome2}</Text>
                <Text style={styles.text}>CourseOutcome3: {props.Outcome3}</Text>
                <Text style={styles.text}>CourseOutcome4: {props.Outcome4}</Text>
                <Text style={styles.text}>CourseOutcome5: {props.Outcome5}</Text>
                <Text style={styles.text}>CourseOutcome6: {props.Outcome6}</Text>
                <Text style={styles.text}>CourseOutcome7: {props.Outcome7}</Text>
                <Text style={styles.text}>CourseOutcome8: {props.Outcome8}</Text>
                <Text style={styles.text}>CourseOutcome9: {props.Outcome9}</Text>
                <Text style={styles.text}>Relationship between Course Outcomes and Student Outcomes for {props.Program}:</Text>
                <Text style={styles.text}>StudentOutcome1: {props.Student1}</Text>
                <Text style={styles.text}>StudentOutcome2: {props.Student2}</Text>
                <Text style={styles.text}>StudentOutcome3: {props.Student3}</Text>
                <Text style={styles.text}>StudentOutcome4: {props.Student4}</Text>
                <Text style={styles.text}>StudentOutcome5: {props.Student5}</Text>
                <Text style={styles.text}>StudentOutcome6: {props.Student6}</Text>
                <Text style={styles.text}>StudentOutcome7: {props.Student7}</Text>
                <Text style={styles.text}> -- OUTCOME TABLE GOES HERE</Text>
                <Text style={styles.text}>Brief list of topics to be covered</Text>
                <Text style={styles.text}>{props.Topics}</Text>
            </Page>
        </Document>
    )
}

export default PDFFile