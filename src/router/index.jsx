import { BrowserRouter } from "react-router-dom";
import WebsiteRoutes from "./WebsiteRoutes";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <WebsiteRoutes />
      </BrowserRouter>
    </>
  );
}
