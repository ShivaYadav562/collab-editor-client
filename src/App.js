import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import EditorPage from "./pages/EditorPage";
import AuthPage from "./pages/AuthPage";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={<AuthPage />}
          />

          <Route
            path="/editor"
            element={<EditorPage />}
          />

        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;