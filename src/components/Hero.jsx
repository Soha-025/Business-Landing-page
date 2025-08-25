import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-[90vh] flex items-center py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Grow Your Business with{" "}
            <span className="text-blue-600">BizBrand</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We provide smart digital solutions to help you scale your business
            and reach more customers.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src="/images/business.jpg"
            alt="Business"
            className="rounded-xl shadow-lg max-h-[450px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
