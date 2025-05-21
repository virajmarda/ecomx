export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Returns & Refunds</h1>
      <div className="prose max-w-none dark:prose-invert">
        <h2>Return Policy</h2>
        <p>We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return it within 30 days of delivery for a full refund.</p>

        <h2>Return Requirements</h2>
        <ul>
          <li>Items must be unused and in original packaging</li>
          <li>All tags and labels must be attached</li>
          <li>Include the original receipt or order number</li>
          <li>Items must not be damaged or altered</li>
        </ul>

        <h2>Non-Returnable Items</h2>
        <ul>
          <li>Personal care items</li>
          <li>Undergarments</li>
          <li>Customized products</li>
          <li>Digital downloads</li>
          <li>Gift cards</li>
        </ul>

        <h2>How to Return</h2>
        <ol>
          <li>Log into your account and initiate a return request</li>
          <li>Print the provided return shipping label</li>
          <li>Pack the item securely with all original packaging</li>
          <li>Drop off the package at any authorized shipping location</li>
        </ol>

        <h2>Refund Process</h2>
        <p>Once we receive your return:</p>
        <ul>
          <li>We'll inspect the item within 2 business days</li>
          <li>You'll receive an email confirmation when your refund is processed</li>
          <li>Refunds typically appear in your account within 5-7 business days</li>
          <li>Original shipping charges are non-refundable</li>
        </ul>

        <h2>Damaged or Defective Items</h2>
        <p>If you receive a damaged or defective item, please contact our customer service team immediately. We'll arrange for a replacement or refund and cover all shipping costs.</p>
      </div>
    </div>
  );
}