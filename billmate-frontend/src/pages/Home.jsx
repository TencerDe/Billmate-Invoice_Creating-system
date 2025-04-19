import React from 'react';
import '../styles/global.css';
 // Update path if needed

const HomePage = () => {
  return (
    <div>

      {/* Home Section */}
      <section className="home">
        <div className="description">
          <h1>Welcome to BillMate</h1>
          <p>
            Your trusted companion for effortless invoice billing. Generate,
            manage, and share invoices seamlessly with GST-ready precision.
          </p>
          <button className="btn-create">Create Invoice</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 BillMate. All rights reserved. (You’ll update this 😎)
      </footer>
    </div>
  );
};

export default HomePage;
