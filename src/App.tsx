/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hakkimizda" element={<About />} />
          <Route path="hizmetler" element={<Services />} />
          <Route path="surec" element={<Process />} />
          <Route path="iletisim" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
