import { Routes, Route } from "react-router-dom";
import RoutesPage from "./routes/RoutesPage";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/*" element={
          <RoutesPage />
        } />
      </Route>
    </Routes>
  )
}
