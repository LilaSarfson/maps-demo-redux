
import InputApp from "./components/InputApp";
import './index.css'
import DisplayMapClass  from "./components/DisplayMaps";
function App() {
  return (
    <div className="App">
      <h2>Find your place</h2>
        <InputApp />
        <DisplayMapClass/>
    </div>
  );
}

export default App;
