import HelloWorldComponent from "./hello-world/hello-world-component";
import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";
import PositionComponent from "./positioning/position-component";
import SymbolOfExcellenceComponent from "./symbol-of-excellence/symbol-of-excellence-component";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import GetInTouchComponent from "./get-in-touch/get-in-touch-component";
import BoxComponent from "./Box/Box-component";
import OurPromiseComponent from "./our-promise/our-promise-component";
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>React is working!</p>
      <HelloWorldComponent />
      <LeadersTomorrowComponent />
      <SymbolOfExcellenceComponent />
       <TrustedbyComponent />
      <GetInTouchComponent />
      <BoxComponent />
      <OurPromiseComponent />
    </div>
  );
}

export default App;