import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';

/*
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
})
*/
const PDFFile = (props) => {
    return (
        <Document>
            <Page>
                <Text>B.S. {props.Program} , {props.RequiredFor}</Text>
                <Text>{props.CreditHours}, {props.ContactHours}</Text>
                <Text>Course Coordinator: {props.Coordinator}</Text>
                <Text>Textbook: {props.Book}</Text>
                <Text>Catalog Description: {props.CourseDescription}</Text>
                <Text>Prerequisite(s): {props.PreRequisites}</Text>
                <Text>Course Outcomes: Blah blah blah</Text>
                <Text>Relationship between Course Outcomes and Student Outcomes for {props.Program}:</Text>
                <Text> -- OUTCOME TABLE GOES HERE</Text>
            </Page>
            <Page>
                <Text> -- OUTCOME TABLE MAY CONTINUE HERE</Text>
                <Text>Brief list of topics to be covered</Text>
                <Text>{props.Topics}</Text>
            <Text 
            render={({pageNumber, totalPages}) => `${pageNumber}/${totalPages}`} fixed/>
            </Page>
        </Document>
    )
}

export default PDFFile;