import React from 'react'
import { Button, Col, Row, Table, Container } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import style from './CSS Modules/Topic.module.css'
import { Link } from 'react-router-dom'

export default function IndividualTopic({ value, link, index }) {
  return (
    <>
      <Table>
        <Row>
          <Col className='col-8'>
            {index + 1}. <span className={`${style.text}`}>{value}</span>
          </Col>
          <Col className='col-4'>
            <Link to={"/video?id=" + link} className='ms-2 px-4 py-1' variant="outline-success">
              <Button variant="outline-success">Click here</Button>
            </Link>
          </Col>
        </Row>
      </Table>
    </>
  )
}
