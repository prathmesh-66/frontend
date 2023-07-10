import "./app.css"
import Applied from "./components/applied/applied"
import Accepeted from "./components/accepted/accepted"
import Rejected from "./components/rejected/rejected"

function App() {
  return (
   <div className="app">
    <Applied className="applied"/>
    <Accepeted className="accpeted"/>
    <Rejected className="accpeted"/>
   </div>
  );
}

export default App;
