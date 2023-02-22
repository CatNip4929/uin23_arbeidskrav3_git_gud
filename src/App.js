import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyComponent from "./components/MyComponent";
import Content from "./components/Content";
function App() {
  return (
    <BrowserRouter>
    <main>
    <MyComponent />
      <Routes>
          <Route path="html" element={<Content title="HTML" />} />
          <Route path="css" element={<Content title="CSS" />} />
          <Route path="javascript" element={<Content title="Javascript" />} />
          <Route path="reactpage" element={<Content title="React" />} />
          <Route path="sanity" element={<Content title="Sanity" />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
