import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'The Luxe Satchel',
    price: '$250',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&crop=center&auto=format&q=80',
    altText: 'Luxe Satchel',
  },
  {
    id: 2,
    name: 'Classic Silk Scarf',
    price: '$75',
    imageUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop&crop=center&auto=format&q=80',
    altText: 'Classic Silk Scarf',
  },
  {
    id: 3,
    name: 'Elegant Pearl Necklace',
    price: '$180',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&crop=center&auto=format&q=80',
    altText: 'Elegant Pearl Necklace',
  },
  {
    id: 4,
    name: 'Midnight Blue Dress',
    price: '$320',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop&crop=center&auto=format&q=80',
    altText: 'Midnight Blue Dress',
  },
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <>
      {/* Import fonts directly in head */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 text-stone-800 overflow-x-hidden">

        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-lg">
          <nav className="px-6 lg:px-12 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="animate-bounce" style={{animationDuration: '6s'}}>
                <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="lotus-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A68F80"/>
                      <stop offset="100%" stopColor="#8B7355"/>
                    </linearGradient>
                  </defs>
                  <g fill="none" stroke="url(#lotus-gradient)" strokeWidth="2.5">
                    <path d="M50 35 Q45 25 50 15 Q55 25 50 35" />
                    <path d="M42 40 Q32 30 37 20 Q47 30 42 40" />
                    <path d="M35 50 Q25 40 30 30 Q40 40 35 50" />
                    <path d="M58 40 Q68 30 63 20 Q53 30 58 40" />
                    <path d="M65 50 Q75 40 70 30 Q60 40 65 50" />
                    <path d="M42 55 Q37 65 47 70 Q47 60 42 55" />
                    <path d="M58 55 Q63 65 53 70 Q53 60 58 55" />
                  </g>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-semibold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent"
                     style={{fontFamily: 'Playfair Display, serif'}}>SIRI</div>
                <div className="text-xs text-amber-600 tracking-widest font-light -mt-1">BOUTIQUE</div>
              </div>
            </div>
            <ul className="hidden md:flex space-x-8 text-sm font-medium">
              <li><a href="#" className="hover:text-amber-600 transition-all duration-300 relative group">
                Collection
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#" className="hover:text-amber-600 transition-all duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#" className="hover:text-amber-600 transition-all duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
            </ul>
          </nav>
        </header>

        {/* Main Content - Single Screen Layout */}
        <main className="pt-20 min-h-screen flex">

          {/* Left Side - Hero Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-12 py-12">
            <div className="max-w-lg">
              <h1 className="text-5xl lg:text-7xl font-light mb-6 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent leading-tight"
                  style={{fontFamily: 'Playfair Display, serif'}}>
                Curated
                <br />
                <span className="font-semibold">Elegance</span>
              </h1>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
                Discover exclusive fashion pieces that tell stories of exceptional craftsmanship and timeless style. Each item is carefully selected for the modern connoisseur.
              </p>

              {/* Quick Stats */}
              <div className="flex space-x-8 mb-10">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-amber-600" style={{fontFamily: 'Playfair Display, serif'}}>100+</div>
                  <div className="text-sm text-amber-700">Curated Pieces</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-amber-600" style={{fontFamily: 'Playfair Display, serif'}}>5★</div>
                  <div className="text-sm text-amber-700">Premium Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-amber-600" style={{fontFamily: 'Playfair Display, serif'}}>24h</div>
                  <div className="text-sm text-amber-700">Fast Shipping</div>
                </div>
              </div>

              <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
                <span className="relative z-10">Explore Collection</span>
              </button>
            </div>
          </div>

          {/* Right Side - Interactive Product Showcase */}
          <div className="hidden lg:flex w-1/2 flex-col justify-center items-center px-12 py-12 relative">

            {/* Featured Product Display */}
            <div className="relative mb-8">
              <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.altText}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                <h3 className="font-semibold text-lg" style={{fontFamily: 'Playfair Display, serif'}}>{selectedProduct.name}</h3>
                <p className="text-amber-600 font-medium">{selectedProduct.price}</p>
              </div>
            </div>

            {/* Product Selector */}
            <div className="flex space-x-4">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedProduct.id === product.id
                      ? 'border-amber-600 shadow-lg scale-110'
                      : 'border-transparent hover:border-amber-600 opacity-70'
                  }`}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.altText}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-20 bg-white/30 backdrop-blur-md rounded-full p-3 animate-pulse">
              <div className="w-3 h-3 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full"></div>
            </div>
            <div className="absolute bottom-32 left-32 bg-white/30 backdrop-blur-md rounded-full p-2 animate-pulse" style={{animationDelay: '2s'}}>
              <div className="w-2 h-2 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full"></div>
            </div>
            <div className="absolute top-40 right-16 bg-white/30 backdrop-blur-md rounded-full p-4 animate-pulse" style={{animationDelay: '4s'}}>
              <div className="w-4 h-4 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full"></div>
            </div>
          </div>

          {/* Mobile Product Grid */}
          <div className="lg:hidden w-full px-6 py-8">
            <div className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-white/30 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-lg">
                  <div className="aspect-square">
                    <img
                      src={product.imageUrl}
                      alt={product.altText}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm mb-1" style={{fontFamily: 'Playfair Display, serif'}}>{product.name}</h3>
                    <p className="text-amber-600 font-semibold text-sm">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Minimal Footer */}
        <footer className="px-6 lg:px-12 py-6 border-t border-stone-300">
          <div className="flex justify-between items-center text-sm text-stone-600">
            <p>&copy; 2024 Siri Boutique</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-amber-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}