import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import ViewContact from "./components/ViewContact";
import {BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className=" font-poppins m-0 p-0 box-border bg-gradient-to-t from-purple-200 to-indigo-200 min-h-screen">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
      <Route path="/view/:id" element={<ViewContact />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
