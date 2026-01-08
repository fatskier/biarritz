import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">Your Book Title</div>
            <div className="flex gap-6">
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition">About</a>
              <a href="#author" className="text-gray-700 hover:text-primary-600 transition">Author</a>
              <a href="#reviews" className="text-gray-700 hover:text-primary-600 transition">Reviews</a>
              <a href="#buy" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">Get the Book</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Book Title Goes Here
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A captivating subtitle that draws readers in and makes them want to know more about your incredible story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#buy"
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl text-center"
                >
                  Buy Now - $14.99
                </a>
                <a
                  href="#about"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition text-center"
                >
                  Learn More
                </a>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-primary-600">4.8★</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">1,247</p>
                  <p className="text-sm text-gray-600">Happy Readers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">324</p>
                  <p className="text-sm text-gray-600">Five Star Reviews</p>
                </div>
              </div>
            </div>

            {/* Right side - Book Cover */}
            <div className="flex justify-center">
              <div className="relative w-80 h-[480px] shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                {/* Placeholder for book cover - replace with your actual image */}
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-700 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <p className="text-2xl font-bold mb-2">Your Book</p>
                    <p className="text-4xl font-bold mb-4">Cover</p>
                    <p className="text-sm opacity-80">Replace this with your actual book cover image</p>
                  </div>
                </div>
                {/* To use a real image, replace the div above with:
                <Image
                  src="/book-cover.jpg"
                  alt="Book Cover"
                  fill
                  className="object-cover"
                  priority
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Book Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About the Book</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Enter a world where imagination meets reality. This compelling narrative takes readers on an unforgettable journey through...
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              With vivid characters and a gripping storyline, this book explores themes of courage, determination, and the power of human connection. Whether you're a fan of [genre] or simply love a good story, this book will keep you turning pages late into the night.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Key Theme 1</h3>
                <p className="text-gray-700">
                  Describe a major theme or element of your book that will resonate with readers.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Key Theme 2</h3>
                <p className="text-gray-700">
                  Another compelling aspect that makes your book unique and worth reading.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">✨ Key Theme 3</h3>
                <p className="text-gray-700">
                  What readers will take away from your book that they won't find elsewhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio Section */}
      <section id="author" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About the Author</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Author Photo */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl">
                {/* Placeholder - replace with your photo */}
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <p className="text-white text-center px-4">Your Photo Here</p>
                </div>
                {/* To use a real image:
                <Image
                  src="/author-photo.jpg"
                  alt="Author"
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>

            {/* Author Bio */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Your Name</h3>
              <p className="text-gray-700 leading-relaxed">
                Tell your story here. Share your background, what inspired you to write this book, and what makes you uniquely qualified to tell this story. This is your chance to connect with readers on a personal level.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Include any relevant credentials, previous works, or interesting facts about yourself that help establish your authority and make readers want to know more about you.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="text-primary-600 hover:text-primary-700 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-700 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-700 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Reviews Section */}
      <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">What Readers Are Saying</h2>
          <p className="text-gray-600 text-center mb-12">Don't just take our word for it</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "This book completely captivated me from the first page. I couldn't put it down! A must-read for anyone who loves great storytelling."
              </p>
              <p className="text-gray-900 font-semibold">— Sarah Johnson</p>
              <p className="text-gray-500 text-sm">Verified Reader</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "An absolute masterpiece. The author has a gift for creating characters that feel real and a plot that keeps you guessing until the very end."
              </p>
              <p className="text-gray-900 font-semibold">— Michael Chen</p>
              <p className="text-gray-500 text-sm">Verified Reader</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "I've recommended this book to all my friends. It's rare to find something this well-written and engaging. Truly exceptional work."
              </p>
              <p className="text-gray-900 font-semibold">— Emily Rodriguez</p>
              <p className="text-gray-500 text-sm">Verified Reader</p>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase/CTA Section */}
      <section id="buy" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Reading?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of readers who have already discovered this incredible story
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Purchase Option 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Kindle</h3>
              <p className="text-3xl font-bold mb-4">$9.99</p>
              <a
                href="#"
                className="block bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Buy on Amazon
              </a>
            </div>

            {/* Purchase Option 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-2 border-yellow-400 transform md:scale-105">
              <div className="bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Paperback</h3>
              <p className="text-3xl font-bold mb-4">$14.99</p>
              <a
                href="#"
                className="block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
              >
                Buy on Amazon
              </a>
            </div>

            {/* Purchase Option 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Audiobook</h3>
              <p className="text-3xl font-bold mb-4">$19.99</p>
              <a
                href="#"
                className="block bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Buy on Audible
              </a>
            </div>
          </div>

          <p className="text-sm text-primary-200">
            30-day money-back guarantee | Free shipping on orders over $25
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <p className="text-gray-400">
                A self-published work of passion, created to share a story that needed to be told.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About the Book</a></li>
                <li><a href="#author" className="text-gray-400 hover:text-white transition">About the Author</a></li>
                <li><a href="#reviews" className="text-gray-400 hover:text-white transition">Reviews</a></li>
                <li><a href="#buy" className="text-gray-400 hover:text-white transition">Purchase</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">Email: author@example.com</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
