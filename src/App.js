/** @jsxImportSource @emotion/react */

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import BookDetailPage from "./pages/BookDetailPage";
import { Global, css } from "@emotion/react";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: white;
            color: black;
            transition-duration: 0.2s;
            transition-property: background-color, color;
          }
          a {
            color: black;
            text-decoration: none;
          }
          ul {
            list-style: none;
            padding: 0;
          }
        `}
      />
      <div
        css={css`
          min-height: 90vh;
        `}
      >
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route path="/book/:bookId" element={<BookDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
