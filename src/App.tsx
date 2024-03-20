import { Toaster } from "./components";
import { ThemeProvider } from "./provider";
import { Main } from "./screens/main";

function App() {
  return (
    <ThemeProvider>
      <Toaster />
      <Main />
    </ThemeProvider>
  );
}

export default App;
