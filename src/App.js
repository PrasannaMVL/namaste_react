import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import Pagination from "./components/Pagination";

const AppComponent = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
      {/* <Pagination /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
