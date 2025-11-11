import Header from "./components/Header";
import Homepage from "./components/Homepage";
import AboutUs from "./components/About-Us";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <div className="parent__container">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* add more routes as you create pages */}
        {/* <Route path="/workshops" element={<Workshops />} /> */}
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        {/* <Route path="/media/archive" element={<MediaArchive />} /> */}
        {/* <Route path="/media/podcast" element={<Podcast />} /> */}
        {/* <Route path="/get-involved/charities" element={<Charities />} /> */}
        {/* <Route path="/get-involved/follow-us" element={<FollowUs />} /> */}
      </Routes>
    </div>
  );
}

export default App;
