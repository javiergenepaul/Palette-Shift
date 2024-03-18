import { ThemeProvider } from "./provider";
import { Main } from "./screens/main";

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
