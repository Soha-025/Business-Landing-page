export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} BizBrand. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-200">Facebook</a>
          <a href="#" className="hover:text-gray-200">Twitter</a>
          <a href="#" className="hover:text-gray-200">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
