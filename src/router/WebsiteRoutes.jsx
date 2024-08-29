import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "../layouts/WebsiteLayout";
import HomePage from "../pages/HomePage";
import NavigationComponent from "../pages/Authentication/NavigationComponent";
import Forgetpassword from "../pages/Authentication/forgetpassword";
import Page404 from "../pages/Page404 ";
import Services from "../pages/Services/Services";

export default function WebsiteRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <WebsiteLayout>
            <HomePage />
          </WebsiteLayout>
        }
      />
      <Route
        path="/our-services"
        element={
          <WebsiteLayout>
            <Services />
          </WebsiteLayout>
        }
      />

      <Route
        path="/register"
        element={
          <WebsiteLayout>
            <NavigationComponent />
          </WebsiteLayout>
        }
      />
      <Route
        path="/login"
        element={
          <WebsiteLayout>
            <NavigationComponent />
          </WebsiteLayout>
        }
      />
      <Route
        path="/password/reset"
        element={
          <WebsiteLayout>
            <Forgetpassword />
          </WebsiteLayout>
        }
      />

      <Route
        path="*"
        element={
          <WebsiteLayout>
            <Page404 />
          </WebsiteLayout>
        }
      />
    </Routes>
  );
}
