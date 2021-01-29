import React, { useState } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import {actionAuth} from '../actions/actionAuth'
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';

import {
  Link
} from "react-router-dom";





const Auth = (props) => {
  const actionAuth = props.actionAuth

  const [userName , setUserName] = useState('')
  const [Password , setPassword] = useState('')

  const Auths = async (userName, Password) => {
  const data =  await axios.post('/auth', {userName: userName, password: Password});
  if (data.status == 202) {
    alert(data.data)
  } else  {
    const user = data.data
    actionAuth(user)
  }

}



  return (
    <Container className="Auth justify-content-center">
      <div className="Auth-block">
        <Row className="justify-content-center">
          <Col>Ник</Col>
        </Row>

        <Row className="justify-content-center">
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">UserName</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="UserName"
                aria-label="UserName"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>

        </Row>
        <Row className="justify-content-center">
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text  id="basic-addon1">Password</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl 
                name="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Button variant="outline-primary" onClick={() => {Auths(userName,Password)}}>Войти</Button>{' '}
          <Link to="/signup"><Button variant="outline-primary">Зарегистрироваться</Button>{' '}</Link>
        </Row>
      </div>
    </Container>




  );
}

export default connect(state => ({
  Auth: state.Auths,
}),{ actionAuth })(Auth);