import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Login } from "./layout";
import LoginForm from "./components/LoginForm";
import { Home, NewClient, ViewClient, EditClient, NotFound } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<LoginForm />} />
        </Route>
        <Route path="/clients" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<NewClient />} />
          <Route path="edit/:id" element={<EditClient />} />
          <Route path=":id" element={<ViewClient />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
