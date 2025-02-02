// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// // import Sidebar from './components/Sidebar';
// import Sidebara from './components/Sidebara';
// // import ProductManagement from './components/ProductManagement';
// import ProductManagement from './components/ProductManagment';
// // import OrderManagement from './components/OrderManagement';
// import OrderManagement from './components/OrderManagment';
// // import UserManagement from './components/UserManagement';
// import UserManagement from './components/UserManagment';
// import AdminPanel from './pages/AdminPanel';
// import FormPage from './components/FormPage';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Sidebara />
//       <main>
//         <Routes>
//           <Route path="/admin-panel" element={<AdminPanel />} />
//           <Route path="/product-management" element={<ProductManagement />} />
//           <Route path="/order-management" element={<OrderManagement />} />
//           <Route path="/user-management" element={<UserManagement />} />
//           <Route path="/form-page" element={<FormPage />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import WishlistPage from "./pages/WishlistPage";
// import AdminDashboard from "./pages/AdminDashboard";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/wishlist" element={<WishlistPage />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AdminPanel from "./components/AdminPanel";
import Wishlist from "./components/WishList";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";


function App() {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <Router>
      {/* Navbar stays in light mode */}
      <div className="bg-white shadow-md">
        <Navbar />
      </div>

      {/* Dark mode applies only to content */}
      <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
