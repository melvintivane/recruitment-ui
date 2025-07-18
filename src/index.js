// import reportWebVitals from "./reportWebVitals";

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryProvider } from "./providers/QueryClientProvider";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ReactQueryProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ReactQueryProvider>
    </BrowserRouter>
  </>
);
