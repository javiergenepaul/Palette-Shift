import { Button } from "./components";
import { ThemeProvider } from "./provider";

function App() {
  return (
    <>
      <ThemeProvider>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button>test</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
