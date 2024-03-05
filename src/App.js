import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Resume from "./Components/Resume";

function App() {
  return (
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/my-resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
