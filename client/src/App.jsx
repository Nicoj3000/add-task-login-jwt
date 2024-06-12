import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPages from "./pages/RegisterPage.jsx";
import { AuthProvider } from "./context/Auth.Contex.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import TaskFormPage from "./pages/TaskFormPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { TaskProvider } from "./context/TasksContex.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className=" container mx-auto px-10">
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPages />} />


            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/add-task" element={<TaskFormPage />} />
              <Route path="/tasks/:id" element={<TaskFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
