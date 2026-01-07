import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  let user="Logu";
  return (
    <div className="app">
      <Header user={user}/>
      <Content/>
      <Footer user="Senthil"/>
    </div>
  );
}

export default App;
