import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Our team"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="text-muted-foreground">
              Founded with a vision to revolutionize online shopping, Xcom has grown from a small startup
              to become a trusted marketplace for quality products across multiple categories. Our journey
              began with a simple idea: to make premium products accessible to everyone.
            </p>
            <p className="text-muted-foreground">
              Today, we serve millions of customers worldwide, offering a carefully curated selection
              of products that meet our high standards for quality and value.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Quality First</h3>
                <p className="text-sm text-muted-foreground">
                  We carefully select and verify all products to ensure they meet our high standards.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Customer Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Your satisfaction is our priority. We're here to provide the best shopping experience.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We continuously improve our platform to make shopping easier and more enjoyable.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Customer Satisfaction</h3>
                <p className="text-sm text-muted-foreground">
                  We go above and beyond to ensure our customers are happy with their purchases.
                </p>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Every product undergoes strict quality checks before being listed on our platform.
                </p>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We embrace new technologies to improve the shopping experience.
                </p>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  We're committed to reducing our environmental impact through sustainable practices.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Our team working"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our diverse team of professionals brings together expertise from retail, technology,
                  and customer service. We work together to create the best possible shopping
                  experience for our customers.
                </p>
                <p className="text-muted-foreground">
                  With offices around the world, we're able to serve customers 24/7 and provide
                  support in multiple languages.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}