import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import UpdateNote from "./pages/UpdateNote";
import DeletedNote from "./pages/DeletedNote";
import ViewNote from "./pages/ViewNote";
import DeletedNotesList from "./pages/DeletedNotesList";
import ReoveNote from "./components/ReoveNote";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addnote" element={<PrivateRoute><AddNote /></PrivateRoute>} />
          <Route path="/updatenote/:id" element={<PrivateRoute><UpdateNote /></PrivateRoute>} />
          <Route path="/deletednote" element={<PrivateRoute><DeletedNotesList /></PrivateRoute>} />
          <Route path="/deletednote/:id" element={<PrivateRoute><DeletedNote /></PrivateRoute>} />
          <Route path="/removenote" element={<PrivateRoute><ReoveNote /></PrivateRoute>} />
          <Route path="/viewnote/:id" element={<PrivateRoute><ViewNote /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;