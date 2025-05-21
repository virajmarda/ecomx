export default function BrandsSection() {
  const brands = [
    {
      id: "apple",
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      id: "samsung",
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    },
    {
      id: "nike",
      name: "Nike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    },
    {
      id: "adidas",
      name: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    },
    {
      id: "sony",
      name: "Sony",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
    },
    {
      id: "lg",
      name: "LG",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Top Brands</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {brands.map((brand) => (
          <div key={brand.id} className="flex items-center justify-center p-4">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}