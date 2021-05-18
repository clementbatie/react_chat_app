import React, { useRef } from 'react'
import { Container, Form, Button, Nav } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./login-button"
import LogoutButton from "./logout-button"
// import Login from "./components/Login"

export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }

  
  const { isAuthenticated } = useAuth0();

  // return (
  //   <Nav className="justify-content-end">
  //     {isAuthenticated ? <LogoutButton /> : <LoginButton />}
  //   </Nav>
  // );
  

  return (
 
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      
   
      <Nav className="justify-content-end">
      {isAuthenticated ? <Form onSubmit={handleSubmit} className="w-100">
      <LogoutButton />
    <Form.Group>
      <Form.Label>Enter Your Id</Form.Label>
      <Form.Control type="text" ref={idRef} required />
    </Form.Group>   
    <Button type="submit" className="mr-2">Login</Button>
    <Button onClick={createNewId} variant="secondary">Create A New Id</Button>
  </Form> : <LoginButton />}
    </Nav>
    </Container>
   
  )
}
