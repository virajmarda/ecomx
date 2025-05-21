export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Shipping & Delivery</h1>
      <div className="prose max-w-none dark:prose-invert">
        <h2>Shipping Methods</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th>Method</th>
              <th>Estimated Time</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard Shipping</td>
              <td>3-5 business days</td>
              <td>$5.99 (Free over $50)</td>
            </tr>
            <tr>
              <td>Express Shipping</td>
              <td>1-2 business days</td>
              <td>$12.99</td>
            </tr>
            <tr>
              <td>International Shipping</td>
              <td>7-14 business days</td>
              <td>Varies by location</td>
            </tr>
          </tbody>
        </table>

        <h2>Order Processing</h2>
        <p>Orders are typically processed within 24 hours of being placed. You will receive a confirmation email with tracking information once your order has been shipped.</p>

        <h2>Tracking Your Order</h2>
        <p>Once your order ships, you will receive a tracking number via email. You can also track your order by logging into your account and viewing your order history.</p>

        <h2>International Shipping</h2>
        <p>We ship to most countries worldwide. International shipping rates and delivery times vary by location. Please note that customers are responsible for any customs duties or taxes that may apply.</p>

        <h2>Shipping Restrictions</h2>
        <ul>
          <li>Some items may not be available for international shipping</li>
          <li>Certain hazardous materials cannot be shipped</li>
          <li>We cannot ship to P.O. boxes for express delivery</li>
        </ul>

        <h2>Lost or Damaged Packages</h2>
        <p>If your package is lost or damaged during transit, please contact our customer service team within 48 hours of the scheduled delivery date. We will work with the shipping carrier to resolve the issue.</p>
      </div>
    </div>
  );
}