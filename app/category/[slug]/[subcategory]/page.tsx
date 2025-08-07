import { SubcategoryPageClient } from "@/components/category/subcategory-page-client";

// Generate static params for all possible category and subcategory routes
export function generateStaticParams() {
  const categories = [
    {
      slug: "electronics",
      subcategories: ["mobiles", "laptops", "tvs-appliances", "audio", "cameras"]
    },
    {
      slug: "fashion", 
      subcategories: ["mens-clothing", "womens-clothing", "footwear", "accessories", "kids-fashion"]
    },
    {
      slug: "home-kitchen",
      subcategories: ["kitchen-appliances", "home-decor", "furniture", "garden-outdoor"]
    },
    {
      slug: "beauty",
      subcategories: ["makeup", "skincare", "hair-care", "personal-care"]
    },
    {
      slug: "sports",
      subcategories: ["fitness-equipment", "sports-gear", "activewear", "outdoor-sports", "water-sports"]
    },
    {
      slug: "books",
      subcategories: ["fiction", "non-fiction", "academic", "childrens", "comics", "books", "movies-music", "games", "stationery"]
    },
    {
      slug: "grocery",
      subcategories: ["fresh-produce", "pantry-staples", "snacks-beverages", "dairy-bakery"]
    },
    {
      slug: "automotive",
      subcategories: ["car-accessories", "bike-accessories", "tools-equipment"]
    }
  ];

  const params: { slug: string; subcategory: string }[] = [];
  categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      params.push({
        slug: category.slug,
        subcategory: subcategory
      });
    });
  });

  return params;
}

export default function SubcategoryPage({ 
  params 
}: { 
  params: { slug: string; subcategory: string } 
}) {
  return <SubcategoryPageClient params={params} />;
}