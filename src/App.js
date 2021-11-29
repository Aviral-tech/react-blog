import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./404"
;import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/create" element={<Create />} />
          </Routes>
          <Routes>
            <Route exact path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
          <Routes>
            <Route exact path="*" element={ <NotFound/>} />
            
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
