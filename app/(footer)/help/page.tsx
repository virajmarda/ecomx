export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Help Center</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Orders & Shipping</h2>
          <ul className="space-y-2">
            <li><a href="/orders" className="text-primary hover:underline">Track Your Order</a></li>
            <li><a href="/shipping" className="text-primary hover:underline">Shipping Information</a></li>
            <li><a href="/returns" className="text-primary hover:underline">Returns & Refunds</a></li>
            <li><a href="/faq" className="text-primary hover:underline">Order FAQs</a></li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Account & Payment</h2>
          <ul className="space-y-2">
            <li><a href="/account" className="text-primary hover:underline">Account Settings</a></li>
            <li><a href="/payment" className="text-primary hover:underline">Payment Methods</a></li>
            <li><a href="/wallet" className="text-primary hover:underline">Wallet & Credits</a></li>
            <li><a href="/security" className="text-primary hover:underline">Account Security</a></li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Customer Support</h2>
          <ul className="space-y-2">
            <li><a href="/contact" className="text-primary hover:underline">Contact Us</a></li>
            <li><a href="/faq" className="text-primary hover:underline">FAQs</a></li>
            <li><a href="/feedback" className="text-primary hover:underline">Submit Feedback</a></li>
            <li><a href="/chat" className="text-primary hover:underline">Live Chat</a></li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Policies</h2>
          <ul className="space-y-2">
            <li><a href="/privacy" className="text-primary hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="text-primary hover:underline">Terms & Conditions</a></li>
            <li><a href="/warranty" className="text-primary hover:underline">Warranty Policy</a></li>
            <li><a href="/security-policy" className="text-primary hover:underline">Security Policy</a></li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">About Shopping</h2>
          <ul className="space-y-2">
            <li><a href="/how-to-shop" className="text-primary hover:underline">How to Shop</a></li>
            <li><a href="/size-guide" className="text-primary hover:underline">Size Guide</a></li>
            <li><a href="/buying-guides" className="text-primary hover:underline">Buying Guides</a></li>
            <li><a href="/store-locator" className="text-primary hover:underline">Store Locator</a></li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/deals" className="text-primary hover:underline">Deals & Offers</a></li>
            <li><a href="/gift-cards" className="text-primary hover:underline">Gift Cards</a></li>
            <li><a href="/membership" className="text-primary hover:underline">Membership</a></li>
            <li><a href="/blog" className="text-primary hover:underline">Blog</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}