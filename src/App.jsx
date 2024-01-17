import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstPage from "./components/pages/FirstPage";
import FrFirstPage from "./components/fr/FrFirstPage";


function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={<FirstPage />} />
        <Route path="/fr/" element={<FrFirstPage />} />
      </Routes>
    </Router>
);
}

export default App;
