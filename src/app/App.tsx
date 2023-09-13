import "./styles/global.css";
import { Button } from "../ui/Button";
import { ColorEnum, SizeEnum } from "../ui/Button/types/ButtonType";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Button size={SizeEnum.large} color={ColorEnum.gray}>
        Click
      </Button>
    </div>
  );
}

export default App;
