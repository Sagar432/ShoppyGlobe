import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

function App() {
  const [search, setSearch] = useState("");
  const location = useLocation();

  const isProductDetailsPage = location.pathname.startsWith("/product/");

  return (
    <Provider store={appStore}>
      {!isProductDetailsPage && (
        <Header search={search} setSearch={setSearch} />
      )}
      <Outlet context={{ search }} />
    </Provider>
  );
}

export default App;
