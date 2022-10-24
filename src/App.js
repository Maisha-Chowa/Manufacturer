import logo from "./logo.svg";
import "./App.css";
import Header from "./Shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Notfound from "./Components/Notfound";
import Blogs from "./Components/Blogs";
import Purchase from "./Purchase/Purchase";
import Footer from "./Shared/Footer";
import ReviewPage from "./ReviewPage/ReviewPage";
import Login from "./Login/Login";
import Register from "./Login/Register";
import RequiredAuth from "./Shared/RequiredAuth";
import MyOrders from "./Dashboard/MyOrders";
import MyReviews from "./Dashboard/MyReviews";
import MyProfile from "./Dashboard/MyProfile";
import Dashboard from "./Dashboard/Dashboard";
import Allusers from "./Dashboard/Allusers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAdmin from "./Shared/RequireAdmin";
import AddProduct from "./Dashboard/AddProduct";
import Payment from "./Dashboard/Payment";
import ManageProducts from "./Dashboard/ManageProducts";
import Myportfolio from "./Components/Myportfolio";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequiredAuth>
              <Purchase />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        >
          <Route index element={<MyOrders />}></Route>
          <Route path="myreview" element={<MyReviews />}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="myprofile" element={<MyProfile />}></Route>
          <Route
            path="allusers"
            element={
              <RequireAdmin>
                <Allusers />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproduct"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/reviews" element={<ReviewPage />}></Route>
        <Route path="/myportfolio" element={<Myportfolio />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
