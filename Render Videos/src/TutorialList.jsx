import Button from "react-bootstrap/Button";
import style from "./CSS Modules/Topic.module.css";
import { Col, Container, Row, Table } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import IndividualTopic from './IndividualTopic';

export default function TutorialList() {
    const topic = [
        {
            name: "Personality Development",
            link: "XU81Pmb1Rl0",
        },
        {
            name: "English Speaking",
            link: "E2PFqDzG8JA"
        },
        {
            name: "How to impress people",
            link: "Z4IjiLxmXLI"
        },
        {
            name: "Personality Development Training",
            link: "jJ4M22p5qLM"
        },
        {
            name: "How to increase confidence",
            link: "_RCGS_pe0B4"
        },
        {
            name: "How to create your identity",
            link: "y69V8UGTQSk"
        },
        {
            name: "How to be Super Confident",
            link: "ItZ0vTvLoUs"
        },
        {
            name: "Leadership Development",
            link: "rRegqFj93Go"
        },
        {
            name: "Success Motivation",
            link: "YrwM_3WkY-g"
        },
        {
            name: "Achieve Anything",
            link: "961bdAfB7lw"
        }
    ]
    return (
        <>
            <center>
                <h3>Tutorial List</h3>
            </center>

            <ListGroup>
                {topic.map((value, index) => {
                    return (
                        <>
                            <Container>
                                <ListGroup.Item key={value}>
                                    <IndividualTopic
                                        value={value.name}
                                        index={index}
                                        link={value.link} />
                                </ListGroup.Item>
                            </Container>
                        </>
                    )
                })}
            </ListGroup>
        </>
    );
}
