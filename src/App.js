import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import EditorPage from "./pages/EditorPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
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
  );
}

export default App;