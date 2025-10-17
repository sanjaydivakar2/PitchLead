export function CaseStudies() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See how our clients achieve success with our solutions
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Company A
                </h3>
                <p className="text-gray-600">Technology Startup</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              "Working with this solution helped us increase our conversion rates by 150% 
              and streamline our entire sales process."
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Results: 150% increase in conversions</span>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Company B
                </h3>
                <p className="text-gray-600">E-commerce Platform</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              "The implementation was seamless and the results exceeded our expectations. 
              We saw immediate improvements in our key metrics."
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Results: 200% ROI in first quarter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
