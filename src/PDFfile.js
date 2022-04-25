import React from 'react';
import { Page, Text, Document, StyleSheet, Font, View } from '@react-pdf/renderer';
import OutcomesTable from './Table';
import { fontWeight } from '@mui/system';


const styles = StyleSheet.create({
    header: {
        fontSize: 12,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 60,
        marginRight: 60,
        fontFamily: "Helvetica"
    },
    boldtext: {
        marginLeft: 60,
        marginRight: 60,
        marginTop: 8,
        marginBottom: 8,
        fontSize: 12,
        textAlign: "justify",
        fontFamily: "Times-Bold",
    },
    text: {
        marginLeft: 60,
        marginRight: 60,
        marginTop: 8,
        marginBottom: 8,
        fontSize: 12,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    listItem: {
        marginLeft: 60,
        marginRight: 60,
        fontSize: 12,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    listHeader: {
        marginTop: 8,
        marginLeft: 60,
        marginRight: 60,
        fontSize: 12,
        textAlign: "justify",
        fontFamily: "Times-Bold",
    },
    topicBox: {
        borderTop: '1px solid #000',
        borderRight: '1px solid #000',
        borderLeft: '1px solid #000',
        borderBottom: '1px solid #000',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
    }
})

const PDFFile = (props) => {
    let degree = "";
    if(props.Program === "Information Science") {
        degree = "B.A.";
    } else {
        degree = "B.S.";
    }

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.header}>{degree} {props.Program}</Text>
                <View style={styles.boldtext}>
                    <Text>{props.CourseNumber}  {props.CourseName}                     {props.Required}</Text>
                </View>

                <Text style={styles.text}>{props.CreditHours}; {props.ContactHours}</Text>
                <Text style={styles.boldtext}>Course Coordinator: {props.Coordinator}</Text>  
                <Text style={styles.boldtext}>Textbook: <Text style={{fontFamily: "Times-Italic"}}>{props.Book}</Text></Text>           
                <Text style={styles.boldtext}>Catalog Description: {props.CourseDescription}</Text>
                <Text style={styles.boldtext}>Prerequisite(s): {props.Prerequisites}</Text>

                <Text style={styles.listHeader}>Course Outcomes:</Text>
                {props.Outcome1 ? <Text style={styles.listItem}>1. {props.Outcome1}</Text> : null}
                {props.Outcome2 ? <Text style={styles.listItem}>2. {props.Outcome2}</Text> : null}
                {props.Outcome3 ? <Text style={styles.listItem}>3. {props.Outcome3}</Text> : null}
                {props.Outcome4 ? <Text style={styles.listItem}>4. {props.Outcome4}</Text> : null}
                {props.Outcome5 ? <Text style={styles.listItem}>5. {props.Outcome5}</Text> : null}
                {props.Outcome6 ? <Text style={styles.listItem}>6. {props.Outcome6}</Text> : null}
                {props.Outcome7 ? <Text style={styles.listItem}>7. {props.Outcome7}</Text> : null}
                {props.Outcome8 ? <Text style={styles.listItem}>8. {props.Outcome8}</Text> : null}
                {props.Outcome9 ? <Text style={styles.listItem}>9. {props.Outcome9}</Text> : null}

                <Text style={styles.boldtext}>Relationship between Course Outcomes and Student Outcomes for {props.Program}:</Text>
                <OutcomesTable data={{
                    Student1: props.Student1,
                    Student2: props.Student2,
                    Student3: props.Student3,
                    Student4: props.Student4,
                    Student5: props.Student5,
                    Student6: props.Student6,
                    Student7: props.Student7,
                    StudentOutcome1: props.StudentOutcome1,
                    StudentOutcome2: props.StudentOutcome2,
                    StudentOutcome3: props.StudentOutcome3,
                    StudentOutcome4: props.StudentOutcome4,
                    StudentOutcome5: props.StudentOutcome5,
                    StudentOutcome6: props.StudentOutcome6,
                    StudentOutcome7: props.StudentOutcome7,
                }}></OutcomesTable>
          
                <Text style={styles.listHeader}>Brief list of topics to be covered</Text>
                <Text style={[styles.text, styles.topicBox]}>{props.Topics}</Text>
            </Page>
        </Document>
    )
}

export default PDFFile

/*const styles = StyleSheet.create({
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
                {// <Text style={styles.title}>B.S. - {props.Program}</Text> }
                <Text style={styles.title}>CSCE {props.CourseNumber} {props.CourseName}</Text>
                <Text style={styles.header}>Instructor Information</Text>
                <Text style={styles.text}>Instructor Name: {props.Coordinator}</Text>
                <Text style={styles.text}>Course Number: {props.CourseNumber}</Text>
                <Text style={styles.text}>Degree Value: {props.Required}</Text>
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
                <Text break style={styles.header}>Relationship between Course Outcomes and Student Outcomes for {props.Program}:</Text>
                <Text style={styles.listItem}>1: {props.Student1}</Text>
                <Text style={styles.listItem}>2: {props.Student2}</Text>
                <Text style={styles.listItem}>3: {props.Student3}</Text>
                <Text style={styles.listItem}>4: {props.Student4}</Text>
                <Text style={styles.listItem}>5: {props.Student5}</Text>
                <Text style={styles.listItem}>6: {props.Student6}</Text>
                <Text style={styles.listItem}>7: {props.Student7}</Text>
                {// <Text style={styles.text}> -- OUTCOME TABLE GOES HERE</Text> }
                <Text style={styles.header}>Brief list of topics to be covered</Text>
                <Text style={styles.text}>{props.Topics}</Text>
            </Page>
        </Document>
    )
}*/