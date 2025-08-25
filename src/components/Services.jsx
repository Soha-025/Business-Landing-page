const services = [
  { title: "Web Development", desc: "Modern and responsive websites tailored to your business.", icon: "🌐" },
  { title: "Digital Marketing", desc: "Boost your brand visibility and attract customers.", icon: "📈" },
  { title: "Consulting", desc: "Expert advice to help you grow strategically.", icon: "💼" }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 shadow-lg rounded-xl hover:shadow-2xl transition">
              <div className="text-5xl">{s.icon}</div>
              <h3 className="text-2xl font-semibold mt-4">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
