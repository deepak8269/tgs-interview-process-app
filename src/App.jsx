// external imports
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

// internal imports
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/Loader";
import CommonToast from "./components/CommonToast";

// AllRoutes import
import AllRoutes from "./router/AllRoutes";

// redux imports
import store, { persistor } from "./store";

// Theme Customizer
import ThemeCustomizer from "./theme";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeCustomizer>
        <BrowserRouter basename="/">
          <Suspense fallback={<Loader />}>
            <CommonToast />
            <AllRoutes />
          </Suspense>
        </BrowserRouter>
      </ThemeCustomizer>
    </PersistGate>
  </Provider>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
