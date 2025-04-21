import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AddCustomer from './pages/AddCustomer';
import AddProduct from './pages/AddProduct';
import CreateInvoice from './pages/CreateInvoice';
import Invoices from './pages/Invoices';

const App = () => {
  const location = useLocation();

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <h1 style={styles.logo}>BillMate</h1>
          <ul style={styles.navLinks}>
            <NavItem to="/" label="Home" currentPath={location.pathname} />
            <NavItem to="/invoices" label="Invoices" currentPath={location.pathname} />
            <NavItem to="/add-customer" label="Add Customer" currentPath={location.pathname} />
            <NavItem to="/add-product" label="Add Product" currentPath={location.pathname} />
            <NavItem to="/create-invoice" label="Create Invoice" currentPath={location.pathname} />
          </ul>
        </div>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/create-invoice" element={<CreateInvoice />} />
        </Routes>
      </div>
    </>
  );
};

const NavItem = ({ to, label, currentPath }) => {
  const isActive = currentPath === to;

  return (
    <li>
      <Link
        to={to}
        style={{
          ...styles.link,
          ...(isActive ? styles.activeLink : {}),
        }}
      >
        {label}
      </Link>
    </li>
  );
};

const styles = {
  navbar: {
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    padding: '1rem 2rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#333',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#333',
    textDecoration: 'none',
    position: 'relative',
    paddingBottom: '4px',
  },
  activeLink: {
    color: '#0077cc',
    borderBottom: '2px solid #0077cc',
  },
};

export default App;
