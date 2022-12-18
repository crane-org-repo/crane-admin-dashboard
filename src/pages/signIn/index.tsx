import { Alert, Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { auth, provider } from "../../firebase";
import { AuthReqProps, postAuthReq } from "../../services/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function SignIn() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const renderObject = <div></div>;

  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    if (isSignIn) {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          // The signed-in user info.
          const user = result.user;
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);

          if (credential) {
            user.getIdToken(true).then((token) => {
              const authReq: AuthReqProps = {
                email: user.email as string,
                name: user.displayName as string,
                uidToken: token,
              };
              postAuthReq(authReq).then((response) => {
                console.log("Logged in successfully!");
                setUser({ response });
                navigate("/");
              });
            });
          } else {
            console.log("ERROR: Facebook credentaials are null");
          }
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);

          // ...
        });

      // Reset the state
      setIsSignIn(false);
    }
  }, [isSignIn]);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        display="flex"
        height="100%"
      >
        <Box sx={{ my: 10 }}>
          {accessToken && <Alert severity="success">{accessToken}</Alert>}
          <Button variant="contained" onClick={() => setIsSignIn(true)}>
            Sign in with Facebook
          </Button>
        </Box>
      </Grid>
    </Container>
  );
}
