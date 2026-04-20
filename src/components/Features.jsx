
function Features() {
  return (
<section className="py-24 bg-gray-50">      
<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">        
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-10 text-center">
          Key Features
        </h2>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          
          <div className="bg-white p-5 md:p-6 rounded-lg shadow text-center">
           <h3 className="text-lg font-semibold mb-2 text-gray-900">              Instant Notes
            </h3>
               <p className="text-gray-500 text-sm">              Add your thoughts quickly and see them appear immediately.
            </p>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-lg shadow text-center">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Automatic Time
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Each note is saved with the exact date and time automatically.
            </p>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-lg shadow text-center">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Saved Forever
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Your notes are stored securely and remain even after page reloads.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features