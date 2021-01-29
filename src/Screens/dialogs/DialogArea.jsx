import React, { useState }  from 'react';


import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';


const DialogArea = ({users_online , Messages, Message_value, setMessage_value}) => {

    return (

        <Container fluid className="p-0 justify-content-center" >

          <Row className="pr-3 justify-content-center info_block" >
            <Col>Участников онлайн: {users_online}</Col>
          </Row>
          <Row className="Block_Chat pr-3">
            <div className="area_messeages">
            <Col xs={12} className="p-0 ">

            {Messages.map(item => {
              return (
                <Row className="message my_message ">
                <Col xs={12} className="message_name"><p><b>{item.message_name}</b></p></Col>
                <Col xs={12} className="message_text">{item.message_text}</Col>
                </Row>  
              )
            })}

            </Col>

          

            </div>
          

          </Row>
          <Row className="pr-3 justify-content-center messeages_area" >
            <Col xs={10} className="p-0 justify-content-center" ><textarea onChange={event => setMessage_value(event.target.value)} value={Message_value} autoFocus placeholder="Начните сообщение..."/></Col>
            <Col><Button variant="outline-primary">Отправить</Button>{' '}</Col>
            

          </Row>

        </Container>

    )
}
export default DialogArea
