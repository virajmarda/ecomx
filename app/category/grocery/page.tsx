import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function GroceryPage() {
  const groceryCategories = [
    {
      name: "Fresh Fruits & Vegetables",
      image: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Farm fresh produce delivered to your doorstep"
    },
    {
      name: "Dairy & Bakery",
      image: "https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Fresh milk, bread, and bakery items"
    },
    {
      name: "Pantry Staples",
      image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Rice, pulses, spices, and cooking essentials"
    },
    {
      name: "Snacks & Beverages",
      image: "https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Chips, cookies, soft drinks, and more"
    },
    {
      name: "Personal Care",
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Soaps, shampoos, and hygiene products"
    },
    {
      name: "Household Items",
      image: "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Cleaning supplies and home essentials"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Grocery & Essentials</h1>
        <p className="text-muted-foreground">
          Fresh groceries and daily essentials delivered to your home
        </p>
      </div>

      {/* Coming Soon Banner */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-8 mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Grocery Delivery Coming Soon!</h2>
        <p className="mb-4">We're working hard to bring fresh groceries to your doorstep</p>
        <Button className="bg-white text-green-600 hover:bg-gray-100">
          Notify Me When Available
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groceryCategories.map((category, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-hidden aspect-[4/3] transition-transform hover:-translate-y-1"
          >
            <div className="relative h-full">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <Button size="sm" disabled className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}