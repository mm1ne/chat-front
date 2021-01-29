import React, { useState, useEffect }  from 'react';
import DialogsList from './dialogs/DialogsList'
import DialogArea from './dialogs/DialogArea'
import axios from 'axios'
// import socket from '../socket';

import {aReloadRooms} from "../actions/actionNewRoom";

import { connect } from 'react-redux'

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {
    Container,
    Row,
    Col,
    InputGroup,
    FormControl,
    Button
  } from 'react-bootstrap';


function Dialogs(props) {


  const [Message_value, setMessage_value] = useState('keks');
  const [SelectRoom,  setSelectRoom] = useState(1)

  useEffect(() => {
    // socket.on('privki', privki)
    ReloadRooms()
  },[])

  const aReloadRooms = props.aReloadRooms
  const Auth = props.Auth
  const rooms = props.rooms;

  const [Messages, setMessages] = useState([
    {message_name: "Maxim", message_text: "Привет,хаййюшки"},
    {message_name: "Maxim", message_text: "Привет,хаййюшки"},
    {message_name: "Maxim", message_text: "Привет,хаййюшки"},
    {message_name: "Maxim", message_text: "Привет,хаййюшки"},
  ]);

  

  const ReloadRooms = async() => {
    alert("обновление")
    const {data} = await axios.get(`/rooms`);
    let rooms  = data.rooms;
    aReloadRooms(rooms);
}

// const roomJoin = (r_id, u_id) => {
//   const obj = {r_id : r_id,
//   u_id : u_id}

//   socket.emit('CHECK' , obj)
// }

//   const privki = (pr) => {
//     console.log(pr)
//   }


  
  return (
        <Container fluid >
            <Row >
                <Col sm={2}>
                <DialogsList ReloadRooms={ReloadRooms}  ListDialogs={rooms} setSelectRoom={setSelectRoom} Auth={Auth} roomJoin={roomJoin}/>
                </Col>

                <Col>
                <DialogArea users_online={1} 
                            Messages={Messages} 
                            Message_value={Message_value}
                            setMessage_value={setMessage_value}/>
                </Col>
            </Row>
        </Container>
  );
}

export default connect(state => ({
  rooms: state.ROOMS,
  Auth: state.Auths,
}),{ aReloadRooms })(Dialogs);
