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

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">All Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="group relative rounded-lg overflow-hidden aspect-[4/3] transition-transform hover:-translate-y-1"
          >
            <div className="relative h-full">
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
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-lg">
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}