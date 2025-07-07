import React from 'react';
import { ArrowRight, ShoppingBag, Star, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover Premium
                <span className="block text-yellow-400">Products</span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-lg mx-auto lg:mx-0">
                Experience the finest collection of carefully curated products designed for modern living.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Shop Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Learn More
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-400 fill-current" />
                  <span className="text-xl sm:text-2xl font-bold">4.9</span>
                </div>
                <p className="text-blue-100 text-sm sm:text-base">Customer Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <TrendingUp className="h-4 sm:h-5 w-4 sm:w-5 text-green-400" />
                  <span className="text-xl sm:text-2xl font-bold">10K+</span>
                </div>
                <p className="text-blue-100 text-sm sm:text-base">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl sm:rounded-3xl transform rotate-3 sm:rotate-6"></div>
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Featured Products"
                className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl sm:rounded-2xl"
                loading="lazy"
              />
              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-900 font-semibold text-sm sm:text-base">Premium Collection</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 sm:h-4 w-3 sm:w-4 text-yellow-400 fill-current" />
                    <span className="text-gray-600 text-sm">4.8</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">Curated selection of top-rated products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}