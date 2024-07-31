import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./styles/globalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
