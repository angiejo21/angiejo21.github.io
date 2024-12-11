import { ThemeProvider } from "./context/themeContext.jsx";
import Layout from "./pages/Layout.jsx";

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
