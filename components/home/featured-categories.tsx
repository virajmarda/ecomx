import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1600",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: "fashion",
    name: "Fashion",
    image: "https://images.pexels.com/photos/5325588/pexels-photo-5325588.jpeg?auto=compress&cs=tinysrgb&w=1600",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: "home-kitchen",
    name: "Home & Kitchen",
    image: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1600",
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    id: "beauty",
    name: "Beauty",
    image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1600",
    color: "from-purple-500/20 to-fuchsia-500/20",
  },
  {
    id: "sports",
    name: "Sports",
    image: "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1600",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "books",
    name: "Books",
    image: "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1600",
    color: "from-orange-500/20 to-red-500/20",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
        <Link 
          href="/categories" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all →
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="group relative rounded-lg overflow-hidden transition-transform hover:-translate-y-1"
          >
            <div className="aspect-square relative">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className={cn(
                "absolute inset-0 bg-gradient-to-b",
                category.color
              )}></div>
            </div>
            <div className="absolute inset-0 flex items-end p-4">
              <div className="bg-background/90 backdrop-blur-sm w-full p-2 rounded text-center font-medium">
                {category.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}