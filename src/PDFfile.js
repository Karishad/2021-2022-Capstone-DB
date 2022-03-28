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
            <Page>
                <Text style={styles.text}>B.S. {props.Program} </Text>
                <Text style={styles.boldtext}>{props.CourseNumber} {props.CourseName} ,{props.Required}</Text>
                <Text style={styles.text}>{props.CreditHours}, {props.ContactHours}</Text>
                <Text style={styles.text}>Course Coordinator: {props.Coordinator}</Text>
                <Text style={styles.text}>Textbook: {props.Book}</Text>
                <Text style={styles.text}>Catalog Description: {props.CourseDescription}</Text>
                <Text style={styles.text}>Prerequisite(s): {props.PreRequisites}</Text>
                <Text style={styles.text}>Course Outcomes: Blah blah blah</Text>
                <Text style={styles.text}>Relationship between Course Outcomes and Student Outcomes for {props.Program}:</Text>
                <Text style={styles.text}> -- OUTCOME TABLE GOES HERE</Text>
                <Text style={styles.text}>Brief list of topics to be covered</Text>
                <Text style={styles.text}>{props.Topics}</Text>


            </Page>
        </Document>
    )
}

export default PDFFile;