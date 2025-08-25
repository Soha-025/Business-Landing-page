const reviews = [
  { name: "Soha Adnan", role: "CEO, TechSoft", text: "BizBrand transformed our online presence!" },
  { name: "Daniyal Baig", role: "Founder, StartX", text: "Amazing service, professional team, and great results!" },
  { name: "Rafay Anwer", role: "Manager, CorpPlus", text: "Highly recommend for business growth." }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 bg-gray-50 shadow-lg rounded-xl hover:shadow-xl transition">
              <p className="italic text-gray-600 mb-4">"{r.text}"</p>
              <h4 className="font-semibold">{r.name}</h4>
              <p className="text-sm text-gray-500">{r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
