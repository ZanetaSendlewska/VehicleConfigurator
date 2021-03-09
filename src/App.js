import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step5 } from "./Step5";
import { Step6 } from "./Step6";
import { Step7 } from "./Step7";
import { Result } from "./Result";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/step3" component={Step3} />
      <Route path="/step4" component={Step4} />
      <Route path="/step5" component={Step5} />
      <Route path="/step6" component={Step6} />
      <Route path="/step7" component={Step7} />
      <Route path="/result" component={Result} />
    </Router>
  );
}

export default App;
