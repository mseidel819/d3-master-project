import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import BarChart from "./routes/bar-chart/bar-chart.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/bar-chart" element={<BarChart />} />
      </Route>
    </Routes>
  );
}

export default App;
