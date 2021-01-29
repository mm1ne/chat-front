import React, { useState } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

import {
    ListGroup,
    Button,
} from 'react-bootstrap';


const DialogsList = ({ReloadRooms , ListDialogs, setSelectRoom, Auth, roomJoin}) => {


    const CreateNewRoom = async (roomName) => {
        await axios
      .post('/rooms', {roomName: roomName, creator : {_id: Auth._id, userName : Auth.userName}});
      ReloadRooms();
      
    }

    const [newRoom, setnewRoom] = useState()
 

    return (
        <div className="List">
         <ListGroup variant="flush" className="pr-3">
         <ListGroup.Item>
             <Button variant="outline-primary" onClick={() => roomJoin(1,1)}>Обновить</Button>{' '}
         </ListGroup.Item>
         <ListGroup.Item>
             <input placeholder="Название группы" value={newRoom} onChange={e => setnewRoom(e.target.value)} type="text"/>
             <Button variant="outline-primary" onClick={() => CreateNewRoom(newRoom)}>Создать</Button>{' '}
         </ListGroup.Item>
             {
                ListDialogs.map(Item => {
                    return  <ListGroup.Item key={Item._id}><a onClick={() => roomJoin(Item._id ,Auth._id)}>{Item.rName}</a><br />Создатель: {Item.creator.userName}</ListGroup.Item>
                    
                })
             }
        </ListGroup>
        </div>

    )
}
export default DialogsList