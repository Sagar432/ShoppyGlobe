import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [search, setSearch] = useState("");
  const location = useLocation();

  const isProductDetailsPage = location.pathname.startsWith("/product/");

  return (
    <Provider store={appStore}>
      <ToastContainer position="top-right" autoClose={3000} />
      {!isProductDetailsPage && (
        <Header search={search} setSearch={setSearch} />
      )}
      <Outlet context={{ search }} />
    </Provider>
  );
}

export default App;
