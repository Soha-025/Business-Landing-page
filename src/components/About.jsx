export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <img src="/images/work.jpg" alt="About us" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 mb-6">
            We are a team of passionate professionals committed to delivering innovative solutions.
            Our mission is to empower businesses with technology and strategy.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Learn More</button>
        </div>
      </div>
    </section>
  );
}
