import React, { useState } from "react";
import { Button } from "reactstrap";
import { ArrowLeft, X as Times, Mail, Facebook, Twitter } from "react-feather";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Pre-login
const PreLogin = ({ setStep }) => {
  return (
    <div>
      <h3 className="modal-title">Lorem ipsum dolor sit.</h3>
      <Button onClick={() => setStep("login")} className="btn-msf" color="dark">
        <Mail className="svg-icon" />
        Acceed
      </Button>
      <hr />
      <Button className="btn-msf" color="success">
        <Facebook className="svg-icon" />
        Continue with Facebook
      </Button>
      <Button className="btn-msf">
        <Twitter className="svg-icon" />
        Continue with Twitter
      </Button>

      <p className="footer-text">
        Something is tut in here{" "}
        <button onClick={() => setStep("register")}>register</button>
      </p>
    </div>
  );
};

// Login
const Login = ({ setStep }) => {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h3>Login Form</h3>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Email" />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
          />
        </div>

        <Button className="mr-3" onClick={() => setStep("forget-password")}>
          Forget Password
        </Button>
        <Button type="submit" color="success">
          Acceed
        </Button>
        <p className="mt-5">
          Don't have account{" "}
          <button onClick={() => setStep("register")}>register</button>
        </p>
      </form>
    </div>
  );
};

// Forget Password
const ForgetPassword = ({ setStep }) => {
  const submitForm = (e) => {
    e.preventDefault();
    setStep("success");
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <input
            type="password"
            className="form-control mt-5 "
            placeholder="password"
          />
        </div>
        <Button type="submit" color="success">
          Submit
        </Button>
      </form>
    </div>
  );
};

// Success
const Success = () => {
  return (
    <div>
      <h3 className="modal-title">Success Title</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        suscipit incidunt voluptatum magni nam quam, nostrum id quis tenetur!
        Ipsam inventore nemo dignissimos consectetur voluptate!
      </p>
      <Button color="success" size="large">
        OK
      </Button>
    </div>
  );
};

// Register
const Register = ({ setStep }) => {
  const submitForm = (e) => {
    e.preventDefault();
    setStep("success");
  };

  const [phone, setPhone] = useState("");

  return (
    <div>
      <h3 className="modal-title">Register Form</h3>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <input type="text" placeholder="Name" className="form-control" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" className="form-control" />
        </div>
        <div className="form-group">
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(p) => setPhone(p)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
          />
        </div>
        <Button color="success">Register Now</Button>
      </form>
    </div>
  );
};

const MultiStepForm = ({ toggle }) => {
  const [history, setHistory] = useState({ current: "pre-login", prev: [] });

  const setStepWithHistory = (_step = null) => {
    let _prev = history.prev;
    if (_step === null) {
      const firstPrev = _prev.shift(); // make the 0 index for firstPrev
      setHistory((p) => ({ ...p, current: firstPrev, prev: _prev }));
      return;
    }

    _prev.unshift(history.current);
    setHistory((p) => ({ ...p, current: _step, prev: _prev }));
  };

  console.log(history);

  const RenderComponent = () => {
    const steps = {
      "pre-login": <PreLogin setStep={setStepWithHistory} />,
      login: <Login setStep={setStepWithHistory} />,
      "forget-password": <ForgetPassword setStep={setStepWithHistory} />,
      success: <Success setStep={setStepWithHistory} />,
      register: <Register setStep={setStepWithHistory} />,
    };

    if (
      steps.hasOwnProperty(history.current) &&
      steps[history.current] !== undefined
    ) {
      return steps[history.current];
    }

    return steps["pre-login"];
  };

  return (
    <div>
      <div className="d-flex align-align-items-center justify-content-between">
        {history.prev.length > 0 && (
          <button onClick={() => setStepWithHistory()}>
            <ArrowLeft className="svg-icon" />
          </button>
        )}
        <button onClick={() => toggle()}>
          <Times className="svg-icon" />
        </button>
      </div>

      <div className="text-center">
        <RenderComponent />
      </div>
    </div>
  );
};

export default MultiStepForm;
