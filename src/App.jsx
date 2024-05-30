import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Dashboard/Settings";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./components/Admin/Pages/AdminLogin";
import AddContent from "./components/Admin/Add Content/Index.jsx";
import AddSubject from "./components/Admin/Pages/AddSubject.jsx";
import AddBranch from "./components/Admin/Pages/AddBranch.jsx";
import AddSyllabus from "./components/Admin/Pages/AddSyllabus.jsx";
import Footer from "./components/common/Footer.jsx";
import Articles from "./components/core/Dashboard/Articles.jsx";
import WriteArticle from "./components/core/Dashboard/WriteArticle.jsx";
import ArticleBoard from "./pages/ArticleBoard.jsx";
import RenderArticle from "./components/core/Article/RenderArticle.jsx";
import ViewBranch from "./pages/ViewBranch.jsx";
import VerifyEmail from "./pages/VerifyEmail.jsx";

function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    <Route
                        path="/branch/:branchKey/:semesterId"
                        element={<ViewBranch />}
                    />
                    <Route
                        path="/verify-email"
                        element={<VerifyEmail />}
                    />

                    <Route element={<AdminLogin />}>
                        <Route element={<Dashboard />}>
                            <Route
                                path="admin/add-content"
                                element={<AddContent />}
                            />
                            <Route
                                path="admin/add-subjects"
                                element={<AddSubject />}
                            />
                            <Route
                                path="admin/add-branch"
                                element={<AddBranch />}
                            />
                            <Route
                                path="admin/add-syllabus"
                                element={<AddSyllabus />}
                            />
                            <Route
                                path="admin/quiz"
                                element={
                                    <h1>Hello there this is quiz section</h1>
                                }
                            />
                        </Route>
                    </Route>

                    <Route element={<Dashboard />}>
                        <Route
                            path="dashboard/my-profile"
                            element={<MyProfile />}
                        />
                        <Route
                            path="dashboard/settings"
                            element={<Settings />}
                        />
                        <Route
                            path="dashboard/articles"
                            element={<Articles />}
                        />
                        <Route
                            path="dashboard/add-content"
                            element={<WriteArticle />}
                        />
                    </Route>

                    <Route element={<ArticleBoard />}>
                        <Route
                            path="article/:subjectKey/:contentId"
                            element={<RenderArticle />}
                        />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
