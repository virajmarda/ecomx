import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <Input placeholder="Your Name" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div>
              <Input placeholder="Subject" />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="h-32" />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Address</h3>
              <p className="text-muted-foreground">123 Commerce Street, Business District, Mumbai, India</p>
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-muted-foreground">+91 123 456 7890</p>
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground">support@xcom.com</p>
            </div>
            <div>
              <h3 className="font-medium">Business Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}