import Home from "./component/Home";
import Login from "./component/Login";
import NavBar from "./component/NavBar";
import ProductDetails from "./component/ProductDetails";
import ProductList from "./component/ProductList";
import Products from "./component/Products";
import SignUp from "./component/SignUp";
import TodoApp from "./component/TodoApp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  let user = "Logu";
  return (
    <div className="app">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path="list" element={<ProductList />} />
          </Route>
          <Route path="/login/:user" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
