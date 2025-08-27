import React from 'react';

// The build environment is unable to resolve 'next/head' and 'next/image' because
// it's not a full Next.js environment. We'll replace them with standard HTML
// elements and a simple Image component to make the code runnable in this environment.

function Head() {
  return (
    <>
      <title>Siri Boutique</title>
      <meta name="description" content="Siri Boutique - Elegant and exclusive fashion" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
    </>
  );
}

function Image({ src, alt, layout, objectFit, quality, className, width, height }) {
  const style = {
    position: layout === 'fill' ? 'absolute' : 'relative',
    width: layout === 'fill' ? '100%' : (width ? `${width}px` : 'auto'),
    height: layout === 'fill' ? '100%' : (height ? `${height}px` : 'auto'),
    objectFit: objectFit || 'contain'
  };

  return <img src={src} alt={alt} style={style} className={className} />;
}

const products = [
  {
    id: 1,
    name: 'The Luxe Satchel',
    price: '$250',
    imageUrl: 'https://placehold.co/400x500/E8DED8/5C4B44?text=Satchel',
    altText: 'Luxe Satchel',
  },
  {
    id: 2,
    name: 'Classic Silk Scarf',
    price: '$75',
    imageUrl: 'https://placehold.co/400x500/D4C9BF/4A453C?text=Scarf',
    altText: 'Classic Silk Scarf',
  },
  {
    id: 3,
    name: 'Elegant Pearl Necklace',
    price: '$180',
    imageUrl: 'https://placehold.co/400x500/C4B7AC/3F352E?text=Necklace',
    altText: 'Elegant Pearl Necklace',
  },
  {
    id: 4,
    name: 'Midnight Blue Dress',
    price: '$320',
    imageUrl: 'https://placehold.co/400x500/B2A59F/2A2520?text=Dress',
    altText: 'Midnight Blue Dress',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F2EF] text-[#5C4B44] font-inter">
      <Head />
      <Layout>
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[80vh] flex items-center justify-center text-center p-8">
            <div className="absolute inset-0">
              <Image
                src="https://placehold.co/1920x1080/D1C6BB/E8DED8?text=Hero+Image"
                alt="Boutique interior"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="opacity-80"
              />
            </div>
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto mb-4">
                <Image
                  src="https://i.imgur.com/K07o7o4.png" // The correct logo URL from the image provided
                  alt="Siri Boutique Logo"
                  width={200}
                  height={200}
                  objectFit="contain"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-extralight tracking-widest uppercase mb-4 font-cormorant-garamond">
                Siri Boutique
              </h1>
              <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
                Discover curated elegance and exclusive fashion. Each piece tells a story of craftsmanship and style.
              </p>
            </div>
          </section>

          {/* Featured Products Section */}
          <section className="py-20 px-4 md:px-12 lg:px-24">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 font-cormorant-garamond">
              Featured Collection
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}

function Layout({ children }) {
  const logoUrl = "https://i.imgur.com/K07o7o4.png"; // The correct logo URL from the image provided

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 bg-[#F5F2EF] bg-opacity-95 backdrop-blur-sm shadow-sm py-4 px-4 md:px-12 lg:px-24">
        <nav className="flex items-center justify-between">
          <div className="w-12 h-12">
            <Image
              src={logoUrl}
              alt="Siri Boutique Logo"
              width={200}
              height={200}
              objectFit="contain"
            />
          </div>
          <ul className="flex space-x-6 md:space-x-10 text-sm md:text-base">
            <li><a href="#" className="hover:text-[#A68F80] transition-colors font-light">Shop</a></li>
            <li><a href="#" className="hover:text-[#A68F80] transition-colors font-light">About</a></li>
            <li><a href="#" className="hover:text-[#A68F80] transition-colors font-light">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="pt-[70px]"> {/* Spacer to account for fixed header */}
        {children}
      </div>
      <footer className="bg-[#5C4B44] text-[#F5F2EF] py-12 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <a href="#" className="mx-2 hover:underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="mx-2 hover:underline">Terms of Service</a>
          </div>
          <p className="text-sm font-light">&copy; 2024 Siri Boutique. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function ProductCard({ product }) {
  return (
    <div className="bg-[#E8DED8] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-80">
        <Image
          src={product.imageUrl}
          alt={product.altText}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-medium mb-2 font-cormorant-garamond">{product.name}</h3>
        <p className="text-lg font-light text-[#A68F80]">{product.price}</p>
      </div>
    </div>
  );
}
