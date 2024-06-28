import React from "react";
import Form from "./Form";
import { Link, Route, Routes } from "react-router-dom";
import FormRef from "./FormRef";
import FormState from "./FormState";

const App = () => {
  return (
    <div>
        <Link id="form-link" to="/form">Form</Link>
<Link id="form-ref-link" to="/form-ref">FormRef</Link>
<Link id="form-state-link" to="/form-state">FormState</Link>
      <Routes>

<Route path="/form" element={<Form/>}></Route>

  <Route path="/form-ref"element={<FormRef/>} ></Route>
  <Route path="form-state" element={<FormState />}></Route>

      </Routes>
    </div>
  );
};

export default App;
