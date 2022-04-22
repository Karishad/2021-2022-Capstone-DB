import React from 'react';
import { Page, Text, Image, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { fontWeight } from '@mui/system';


const styles = StyleSheet.create({
    title: {
        marginLeft: 60,
        marginRight: 60,
        marginTop: 36,
        fontSize: 24,
        textAlign: 'justify',
        fontFamily: 'Helvetica',
        fontWeight: 800
    },
    header: {
        fontSize: 14,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 60,
        marginRight: 60,
        fontWeight: 900
    },
    boldtext: {
        marginLeft: 60,
        marginRight: 60,
        fontSize: 12,
        textAlign: "justify",
        fontFamily: "Times-Roman",
        fontWeight: "bold"
    },
    text: {
        marginLeft: 60,
        marginRight: 60,
        fontSize: 12,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    listItem: {
        marginLeft: 84,
        marginRight: 60,
        fontSize: 12,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    }
})

const PDFFile = (props) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* <Text style={styles.title}>B.S. - {props.Program}</Text> */}
                <Text style={styles.title}>CSCE {props.CourseNumber} {props.CourseName}</Text>
                <Text style={styles.header}>Instructor Information</Text>
                <Text style={styles.text}>Instructor Name: {props.Coordinator}</Text>
                <Text style={styles.boldtext}>{props.CourseNumber} {props.CourseName} {props.Required}</Text>
                <Text style={styles.text}>Office Hours: {props.ContactHours}</Text>                
                <Text style={styles.header}>Welcome to UNT!</Text>
                <Text style={styles.text}>As members of the UNT community, we have all made a commitment to be part of an
                institution that respects and values the identities of the students and employees with whom we interact.
                UNT does not tolerate identity-based discrimination, harassment, and retaliation. UNT's full
                Non-Discrimination Policy can be found in the UNT Policies section of the Syllabus.</Text>
                <Text style={styles.header}>Teaching Assistants</Text>
                <Text style={styles.text}>TBD</Text>
                <Text style={styles.header}>Course Description</Text>
                <Text style={styles.text}>{props.CourseDescription}</Text>
                <Text style={styles.header}>Course Structure</Text>
                <Text style={styles.text}>Credit Hours: {props.CreditHours}</Text>
                <Text style={styles.header}>Course Prerequisites or Other Restrictions</Text>
                <Text style={styles.text}>{props.Prerequisites}</Text>
                <Text style={styles.header}>Course Objectives</Text>
                <Text style={styles.text}>By the end of this course, students will be able to:</Text>
                <Text style={styles.listItem}>1. {props.Outcome1}</Text>
                <Text style={styles.listItem}>2. {props.Outcome2}</Text>
                <Text style={styles.listItem}>3. {props.Outcome3}</Text>
                <Text style={styles.listItem}>4. {props.Outcome4}</Text>
                <Text style={styles.listItem}>5. {props.Outcome5}</Text>
                <Text style={styles.listItem}>6. {props.Outcome6}</Text>
                <Text style={styles.listItem}>7. {props.Outcome7}</Text>
                <Text style={styles.listItem}>8. {props.Outcome8}</Text>
                <Text style={styles.listItem}>9. {props.Outcome9}</Text>
                <Text style={styles.header}>Materials</Text>
                <Text style={styles.text}>Textbook: {props.Book}</Text>
                <Text style={styles.header}>Relationship between Course Outcomes and Student Outcomes for {props.Program}:</Text>
                <Text style={styles.listItem}>1: {props.Student1}</Text>
                <Text style={styles.listItem}>2: {props.Student2}</Text>
                <Text style={styles.listItem}>3: {props.Student3}</Text>
                <Text style={styles.listItem}>4: {props.Student4}</Text>
                <Text style={styles.listItem}>5: {props.Student5}</Text>
                <Text style={styles.listItem}>6: {props.Student6}</Text>
                <Text style={styles.listItem}>7: {props.Student7}</Text>
                {/* <Text style={styles.text}> -- OUTCOME TABLE GOES HERE</Text> */}
                <Text style={styles.header}>Brief list of topics to be covered</Text>
                <Text style={styles.text}>{props.Topics}</Text>
            </Page>
        </Document>
    )
}

export default PDFFile