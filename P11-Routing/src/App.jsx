import Home from "./component/Home";
import Login from "./component/Login";
import ProductDetails from "./component/ProductDetails";
import ProductList from "./component/ProductList";
import Products from "./component/Products";
import SignUp from "./component/SignUp";
import TodoApp from "./component/TodoApp";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

function App() {
  let user="Logu"
  return (
    <div className="app">
      <Router>
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to={`/login/${user}`}>Login</Link></li>
        <li><Link to="/signup">signUp</Link></li>
        <li><Link to="/todo">ToDo</Link></li>
      </ol>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}>
          <Route index element={<ProductList/>}/>
          <Route path="list" element={<ProductList/>}/>
          <Route path="details" element={<ProductDetails/>}/>
          </Route>
          <Route path="/login/:user" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/todo" element={<TodoApp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
