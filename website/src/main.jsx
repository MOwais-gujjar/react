import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Layout from "./layout.jsx";
import Contact from "./components/Contact/contact.jsx";
import Github from "./components/Github/github.jsx";
import ErrorPage from "./Error-page.jsx";
import User from "./components/User/user.jsx";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       {
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/github",
//         element: <Github />,
//       },
//     ],
//   },
// ]);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} />
      <Route path="user/:id" element={<User />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
