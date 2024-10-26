import "./App.css";
import Button from "./components/atom/button/Button";
import Typography from "./components/atom/typography/Typography";
function App() {
  return (
    <div className="p-5">
      <Typography text="This is a button component."  className="py-3"/>
      <Button className="bg-green-600 px-2 py-1 rounded-md text-white" onClick={()=>console.log("Hai")}>
        <em>Click Me</em>
      </Button>
    </div>
  );
}

export default App;
