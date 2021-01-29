import React , { useState } from 'react';
import axios from 'axios';

import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Form,
} from 'react-bootstrap';




const SignUp = () => {


    const [userName , setUserName] = useState('')
    const [Password , setPassword] = useState('')

    const Auths = async (userName, Password) => {
      const data =  await axios.post('/signup', {userName: userName, password: Password});
      if (data.status === 200) {
        alert("Успешно")
      } else  {
        alert(data.data)
      }
  }

  return (
    <Container className="Auth justify-content-center">
      <div className="Auth-block">
        
          <Form.Group controlId="formBasicNickName">
            <Form.Label>Ник</Form.Label>
            <Form.Control value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Введите свой никнейм" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password"  value={Password} onChange={(e) => setPassword(e.target.value)}   placeholder="Ваш пароль" />
          </Form.Group>
                                                          {/* <Form.Group controlId="formBasicCheckbox">
                                                            <Form.Check type="checkbox" label="Check me out" />
                                                          </Form.Group> */}
          <Button onClick={() => Auths(userName,Password)} variant="primary" type="submit">
            Зарегистрироваться
          </Button>
      </div>
    </Container>




  );
}

export default SignUp;