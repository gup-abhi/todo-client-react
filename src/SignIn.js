import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "./config";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const notify = (message) => toast(message);

  const checkUser = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/user/${username}/${password}`
      );

      notify(response.data.msg);
      sessionStorage.setItem("username", response.data.username);
      navigate("/");
    } catch (error) {
      notify(error.response.data.message);
      console.log(`Error in checkUser - ${error.response.data.message}`);
    }
  };

  return (
    <div className="sign-in">
      <h1 className="text-lg-center p-2 m-2">Sign In</h1>
      <div className="container-fluid m-3 p-2">
        <div className="row">
          <div className="col-12 col-lg-5 offset-lg-4">
            <FormControl>
              <div className="form-item p-2">
                <div className="row p-2">
                  <div className="col">
                    <FormLabel className="label p-3">Username</FormLabel>
                  </div>
                  <div className="col">
                    <TextField
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></TextField>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col">
                    <FormLabel className="label p-3">Password</FormLabel>
                  </div>
                  <div className="col">
                    <TextField
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></TextField>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-12 text-center">
                    <Button
                      color="primary"
                      variant="outlined"
                      className="p-3"
                      onClick={checkUser}
                    >
                      Sign In
                    </Button>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col text-center">
                    <a href="signup">Don't have an account!</a>
                  </div>
                </div>
              </div>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
