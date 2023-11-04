import { Routes, Route } from "react-router-dom";

import "./globals.css";
import SigninForm from "./_Auth/forms/SigninForm";
import { Home } from "./_root/pages";
import SignUpForm from "./_Auth/forms/SignUpForm";
import AuthLayout from "./_Auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
