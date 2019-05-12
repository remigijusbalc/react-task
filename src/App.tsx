import React from "react";
import { Provider } from "react-redux";
import store from "./app/redux/store";
import Root from "./app/Root";

const App: React.FC = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
