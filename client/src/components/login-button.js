import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Card } from "react-bootstrap";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
       <div style={{textAlign:"center" }}>
        
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title style={{ fontWeight:"strong" }}>Sign In</Card.Title>
            <Card.Text>
                Click On the Login Button Below To Sign In Using Auth0 Account
            </Card.Text>
            <Button
            onClick={()=>loginWithRedirect()}
            id="qsLoginBtn"
            variant="primary"
            className="btn-margin"
            width="100px"
            backgroundColor= "#007aff"
            paddingHorizontal= "30"
            paddingVertical= "5"
            borderRadius= "30"
            >
                Log In
            </Button>
        </Card.Body>
        </Card>

        </div>
        
    );
};

export default LoginButton;

// import React, { Component } from "react";

// export default class Login extends Component {
//     render() {
//         return (
//             <form>
//                 <h3>Sign In</h3>

//                 <button type="submit" className="btn btn-primary btn-block">Submit</button>
               
//             </form>
//         );
//     }
// }