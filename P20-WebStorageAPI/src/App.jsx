import Home from "./component/Home";
import Login from "./component/Login";
import NavBar from "./component/NavBar";
import ProductList from "./component/ProductList";
import Products from "./component/Products";
import SignUp from "./component/SignUp";
import TodoApp from "./component/TodoApp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./component/NotFound";
import NewProducts from "./component/NewProducts";
import UpdateProduct from "./component/UpdateProduct";
import WishList from "./component/WishList";
function App() {
  let user = "Logu";
  if(!localStorage.getItem("cart")){

    localStorage.setItem("cart",JSON.stringify([]))
  }
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path="list" element={<ProductList />} />
          </Route>
          <Route path="/login/:user" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/newproducts" element={<NewProducts />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
