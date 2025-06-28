import Routes from "./Routes/index";
import { ThemeProvider } from "./context/ThemeContext";

//import Custom Style scss
import "./assets/scss/themes.scss";

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
