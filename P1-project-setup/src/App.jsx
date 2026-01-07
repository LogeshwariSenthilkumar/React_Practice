import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
