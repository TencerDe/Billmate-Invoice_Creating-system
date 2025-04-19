import React, { useEffect, useState } from 'react';

const CreateInvoice = () => {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [items, setItems] = useState([{ product_id: '', quantity: 1 }]);

  const fetchData = async () => {
    const [customerRes, productRes] = await Promise.all([
      fetch('http://127.0.0.1:12/api/customers/'),
      fetch('http://127.0.0.1:12/api/products/')
    ]);
    const customers = await customerRes.json();
    const products = await productRes.json();
    setCustomers(customers.customers || []);
    setProducts(products.products || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = field === 'quantity' ? parseInt(value) : value;
    setItems(updatedItems);
  };

  const addNewItem = () => {
    setItems([...items, { product_id: '', quantity: 1 }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      customer_id: selectedCustomer,
      invoice_number: invoiceNumber,
      items: items.filter(item => item.product_id && item.quantity > 0),
    };

    try {
      const res = await fetch('http://127.0.0.1:12/api/create-invoice/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert('Invoice created successfully!');
      // Reset form
      setInvoiceNumber('');
      setSelectedCustomer('');
      setItems([{ product_id: '', quantity: 1 }]);
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to create invoice');
    }
  };

  return (
    <div>
      <h2>Create Invoice</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Invoice Number:</label><br />
          <input
            type="text"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Customer:</label><br />
          <select
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
            required
          >
            <option value="">--Select Customer--</option>
            {customers.map((cust) => (
              <option key={cust.id} value={cust.id}>
                {cust.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h3>Items</h3>
          {items.map((item, index) => (
            <div key={index}>
              <select
                value={item.product_id}
                onChange={(e) => handleItemChange(index, 'product_id', e.target.value)}
                required
              >
                <option value="">--Select Product--</option>
                {products.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    {prod.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addNewItem}>+ Add Item</button>
        </div>

        <button type="submit">Create Invoice</button>
      </form>
    </div>
  );
};

export default CreateInvoice;
