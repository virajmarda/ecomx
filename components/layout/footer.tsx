import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, PhoneCall, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Xcom</h3>
            <p className="text-muted-foreground mb-4">
              Xcom is a premium marketplace offering a wide range of products from top brands at competitive prices.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/orders" className="text-muted-foreground hover:text-foreground transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Commerce Street, Business District, Mumbai, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">support@xcom.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-border my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Xcom. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
              alt="Visa" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
              alt="Mastercard" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
              alt="Stripe" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" 
              alt="UPI" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%282019%29.svg" 
              alt="Paytm" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" 
              alt="Google Pay" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/29/PhonePe_Logo.svg" 
              alt="PhonePe" 
              className="h-6" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
}