import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import API_BASE_URL from "./config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const notify = (message) => toast(message);

  const submitForm = () => {
    console.log(
      `username - ${username} :: password - ${password} :: email - ${email}`
    );
    createNewUser();
  };

  const createNewUser = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/user`, {
        username,
        password,
        email,
      });

      notify("User created successfully!!");
      navigate("/signin");
    } catch (error) {
      notify(error.response.data.message);
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="sign-up">
      <h1 className="heading text-lg-center m-2 p-2">Sign Up</h1>
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
                  <div className="col">
                    <FormLabel className="label p-3">Email</FormLabel>
                  </div>
                  <div className="col">
                    <TextField
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></TextField>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-12 text-center">
                    <Button
                      color="primary"
                      variant="outlined"
                      className="p-3"
                      onClick={submitForm}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col text-center">
                    <a href="/signin">Already have an account!</a>
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

export default SignUp;
