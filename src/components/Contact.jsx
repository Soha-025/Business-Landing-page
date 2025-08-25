export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-600 mb-8">We’d love to hear from you. Send us a message!</p>
        <form className="grid gap-6">
          <input type="text" placeholder="Your Name" className="p-4 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="p-4 border rounded-lg" />
          <textarea placeholder="Your Message" className="p-4 border rounded-lg h-32"></textarea>
          <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  );
}
