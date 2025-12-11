import "./App.css";

import { Routes, Route } from "react-router-dom";
import HelloWorldComponent from "./hello-world/hello-world-component";
import OurPromisesComponent from "./our-promise/our-promise-component";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import PropsPractice from "./props-practice/props-practice";
import SymbolOfExcellenceComponent from "./symbol-of-excellence/symbol-of-excellence-component";
import FourOFourComponent from "./404-component/404-component";
import UseStateComponent from "./usestate-1st/use-state-form-component";
import UsestateformComponent from "./use-state-form/use-state-form-component";
import AdditionOperationComponent from "./addition-operation-in-state/addition-operation-component";
import FetchApiComponent from "./fetch-api/fetch-api-component";
import UseEffectComponent from "./use-effect-practice/use-effect-practice";
import UseEffectPracticeTwo from "./use-effect-practice/use-effect-practice-2";
import UseEffectPracticeThree from "./use-effect-practice/use-effect-practice-3";
import SignupFormComponent from "./signup-form-api/signup-form-component";
import RegisterFormComponent from "./Register-form/Register-form-component";
import VeloraLivingComponent from "./velora-living/velora-living-component";
function App() {
  const arr1 = [
    { name: "rithika", mobile: "1234" },
    { name: "pooja", mobile: "5678" },
  ];
  const IndexPage = () => {
    return (
      <div
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          minHeight: "400px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>🏠 Home Page</h1>
        <p style={{ fontSize: "1.5rem", opacity: 0.9 }}>
          This is the index route for /leetcode
        </p>
      </div>
    );
  };
  return (
    <div>
      <Routes>
        <Route path="/eshwar" element={<HelloWorldComponent />} />
        <Route path="/our-promise" element={<OurPromisesComponent />} />
        <Route path="/" element={<VeloraLivingComponent />} />

        {/* <Route path="/leetcode/*" element={<HelloWorldComponent />}>
          <Route index element={<IndexPage />} />
          <Route path="trusted-by" element={<TrustedbyComponent />} />
          <Route path="our-promise" element={<OurPromisesComponent />} />
        </Route> */}
        <Route path="/leetcode/:id" element={<SymbolOfExcellenceComponent />} />
        <Route path="*" element={<FourOFourComponent />} />
        <Route path="/use-state-practice" element={<UseStateComponent />} />
        <Route path="/use-state-form" element={<UsestateformComponent />} />
        <Route
          path="/addition-operation"
          element={<AdditionOperationComponent />}
        />
        <Route path="/api-fetch" element={<FetchApiComponent />} />
        <Route path="/use-effect-practice" element={<UseEffectComponent />} />
        <Route
          path="/use-effect-practice-2"
          element={<UseEffectPracticeTwo />}
        />
        <Route
          path="/use-effect-practice-3"
          element={<UseEffectPracticeThree />}
        />
        <Route path="/signup-form" element={<SignupFormComponent />} />
      </Routes>
    </div>
  );
}

export default App;