import React from 'react';

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
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    altText: 'Luxe Satchel',
  },
  {
    id: 2,
    name: 'Classic Silk Scarf',
    price: '$75',
    imageUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    altText: 'Classic Silk Scarf',
  },
  {
    id: 3,
    name: 'Elegant Pearl Necklace',
    price: '$180',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    altText: 'Elegant Pearl Necklace',
  },
  {
    id: 4,
    name: 'Midnight Blue Dress',
    price: '$320',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    altText: 'Midnight Blue Dress',
  },
  {
    id: 5,
    name: 'Elegant Leather Wallet',
    price: '$95',
    imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    altText: 'Elegant Leather Wallet',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F2EF] text-[#5C4B44]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      <Layout>
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[80vh] flex items-center justify-center text-center p-8">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80"
                alt="Boutique interior"
                className="w-full h-full object-cover object-center opacity-80"
              />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-4 font-cormorant">
                Siri Boutique
              </h1>
              <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-8">
                Discover curated elegance and exclusive fashion. Each piece tells a story of craftsmanship and style.
              </p>
              <a href="#" className="py-3 px-8 bg-[#5C4B44] text-[#F5F2EF] text-sm font-medium uppercase tracking-wide rounded-full hover:bg-[#A68F80] transition-colors duration-300">
                Shop the Collection
              </a>
            </div>
          </section>

          {/* Featured Products Section */}
          <section className="py-20 px-4 md:px-12 lg:px-24">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 font-cormorant">
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
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 bg-[#F5F2EF] bg-opacity-95 backdrop-blur-sm shadow-sm py-4 px-4 md:px-12 lg:px-24">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke="#A68F80" strokeWidth="2.5">
                <path d="M50 35 Q45 25 50 15 Q55 25 50 35" />
                <path d="M42 40 Q32 30 37 20 Q47 30 42 40" />
                <path d="M35 50 Q25 40 30 30 Q40 40 35 50" />
                <path d="M58 40 Q68 30 63 20 Q53 30 58 40" />
                <path d="M65 50 Q75 40 70 30 Q60 40 65 50" />
                <path d="M42 55 Q37 65 47 70 Q47 60 42 55" />
                <path d="M58 55 Q63 65 53 70 Q53 60 58 55" />
              </g>
            </svg>
            <div>
              <div className="text-xl font-medium text-[#A68F80] font-cormorant">SIRI</div>
              <div className="text-xs text-[#A68F80] tracking-widest font-light -mt-1">BOUTIQUE</div>
            </div>
          </div>
          <ul className="flex space-x-6 md:space-x-10 text-sm md:text-base">
            <li><a href="#" className="hover:text-[#A68F80] transition-colors font-light">Shop</a></li>
            <li><a href="#" className="hover:text-[#A68F80] transition-colors font-light">About</a></li>
            <li><a href="#" className="hover:text-[#A68F80] transition-colors font-light">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="pt-[80px]">
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
      <div className="relative w-full h-80 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.altText}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-medium mb-2 font-cormorant">{product.name}</h3>
        <p className="text-lg font-light text-[#A68F80]">{product.price}</p>
      </div>
    </div>
  );
}