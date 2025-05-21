import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const deals = [
  {
    id: "summer-sale",
    title: "Summer Sale",
    description: "Up to 50% off on summer essentials",
    backgroundImage: "bg-chart-1/20",
    link: "/deals/summer-sale",
  },
  {
    id: "tech-week",
    title: "Tech Week",
    description: "Latest gadgets at unbeatable prices",
    backgroundImage: "bg-chart-2/20",
    link: "/deals/tech-week",
  },
  {
    id: "clearance",
    title: "Clearance Sale",
    description: "Last chance to grab your favorites",
    backgroundImage: "bg-chart-3/20",
    link: "/deals/clearance",
  },
];

export default function DealsSection() {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Special Deals</h2>
        <Link 
          href="/deals" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <Card
            key={deal.id}
            className={`group overflow-hidden ${deal.backgroundImage} transition-transform hover:-translate-y-1`}
          >
            <CardContent className="p-6 flex flex-col h-48">
              <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{deal.description}</p>
              <div className="mt-auto">
                <Link href={deal.link}>
                  <Button variant="outline" className="group-hover:bg-background/80">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}