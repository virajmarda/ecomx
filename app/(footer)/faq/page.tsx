import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="shipping">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              Standard shipping typically takes 3-5 business days within the country. International shipping can take 7-14 business days depending on the destination.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="returns">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Some restrictions apply to certain product categories.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="payment">
            <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various digital payment methods including UPI and net banking.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="account">
            <AccordionTrigger>Do I need an account to make a purchase?</AccordionTrigger>
            <AccordionContent>
              While you can browse our website without an account, you'll need to create one to make a purchase. This helps us provide you with order tracking and a better shopping experience.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="warranty">
            <AccordionTrigger>What warranty do you provide?</AccordionTrigger>
            <AccordionContent>
              Warranty periods vary by product category. Most electronics come with a 1-year manufacturer warranty. Please check the product description for specific warranty information.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cancel">
            <AccordionTrigger>Can I cancel my order?</AccordionTrigger>
            <AccordionContent>
              Orders can be cancelled within 24 hours of placement, provided they haven't been shipped. Once an order has been shipped, it will need to go through our return process.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}