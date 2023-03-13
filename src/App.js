import "./App.css";
import Statistics from "./components/Statistics/Statistics";
import data from "./data.json";
function App() {
  return (
    <>
      <Statistics data={data} />
    </>
  );
}

export default App;
