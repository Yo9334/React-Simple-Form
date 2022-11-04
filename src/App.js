import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faRocket } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
library.add(faEye, faRocket);

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [step, setStep] = useState(0);

  /* Compo Form onSubmit */
  const handleSubmit = (event) => {
    // console.log(`Email : ${name} ${email} ${password} ${confirmpassword}`);
    event.preventDefault();
    if (password !== confirmpassword) {
      setErrorMsg("Error password");
    } else {
      setErrorMsg("");
      setStep(1);
    }
  };

  /* Compo StepTwo OnSubmit */
  const handleEdit = (event) => {
    // console.log("Edit");
    event.preventDefault();
    setStep(0);
  };

  return (
    <>
      <Header />

      {/* mon step est à {step} */}
      {step === 0 ? (
        <Form
          ObjName={{ name, setName }}
          ObjEmail={{ email, setEmail }}
          ObjPassword={{ password, setPassword }}
          ObjConfirmpassword={{ confirmpassword, setConfirmPassword }}
          ObjErrorMsg={{ errorMsg, setErrorMsg }}
          eventSubmit={handleSubmit}
        />
      ) : (
        <StepTwo
          ObjName={{ name, setName }}
          ObjEmail={{ email, setEmail }}
          ObjPassword={{ password, setPassword }}
          eventEdit={handleEdit}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
