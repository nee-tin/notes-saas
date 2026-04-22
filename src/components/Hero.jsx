

  
 function Hero() {
  return (
<section className="relative bg-gradient-to-b from-white to-gray-100 py-24 flex items-center justify-center">      
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">

       <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
  Capture your ideas <br />
  <span className="text-indigo-600">without losing focus</span>
</h1>

       <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
  Quickly write, organize, and access your notes anytime with a clean and distraction-free interface.
</p>

<div className="flex justify-center mt-6">
  <a
    href="#notes"
    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    Start Taking Notes
  </a>
</div>
        
      </div>
    </section>
  );
}
export default Hero;


