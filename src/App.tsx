import { Route, Routes } from "react-router-dom";

import RootLayout from "./_root/root-layout";
import MainLayout from "./_main/main-layout";
import { Landing } from "./_root/pages";
import { Documents } from "./_main/pages";


import "./index.css";

function App() {
  return (
    <Routes>
      {/* public routes  */}
      {/* <Route element={<AuthLayout/>}> */}
      {/* <Route path="/" element={}/> */}
      {/* </Route> */}

      {/* public routes  */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/documents" element={<Documents />} />
      </Route>

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default App;
