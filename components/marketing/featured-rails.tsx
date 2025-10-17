export function FeaturedRails() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Rails
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our most popular features and capabilities
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Feature 1
            </h3>
            <p className="text-gray-600">
              Description of your first featured capability or service.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Feature 2
            </h3>
            <p className="text-gray-600">
              Description of your second featured capability or service.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Feature 3
            </h3>
            <p className="text-gray-600">
              Description of your third featured capability or service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
