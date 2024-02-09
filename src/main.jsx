import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataProvider } from "./context/DataContext";
import "./index.css";
import { router } from "./routes/Routes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <DataProvider>
      <RouterProvider router={router} />
      <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </DataProvider>
  </React.StrictMode>
);


