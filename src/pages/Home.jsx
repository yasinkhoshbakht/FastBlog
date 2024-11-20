function Home() {
  return (
    <div className="p-6 container mx-auto bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 min-h-screen">
      <h1 className="text-5xl font-extrabold text-white mb-6 text-center leading-tight">
        Welcome to Our Blog Platform
      </h1>
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-white mb-4">About Us</h2>
        <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Welcome to our blog platform, a space where knowledge and creativity
          come together. We aim to provide engaging articles on web development,
          programming, and design, helping enthusiasts and professionals alike
          grow and thrive in their respective fields.
          <br />
          Here, you'll find content tailored to beginners, intermediates, and
          experts, with topics ranging from React and JavaScript to the latest
          trends in web design.
        </p>
      </div>
      <div className="mb-12 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-white mb-4">Our Mission</h2>
        <p className="text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto">
          Our mission is to make learning accessible, exciting, and practical.
          Whether you're just starting your journey in tech or looking to deepen
          your expertise, we're here to provide resources, inspiration, and
          community support.
        </p>
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-white mb-4">
          What We Cover
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-200">
          <li>Comprehensive guides on React and modern frameworks</li>
          <li>Step-by-step tutorials for JavaScript and TypeScript</li>
          <li>Insights into utility-first CSS frameworks like Tailwind CSS</li>
          <li>Tips and tricks for improving web design and UX</li>
          <li>Latest updates and trends in the tech industry</li>
        </ul>
      </div>
      <div className="text-center py-12 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-white">Start Exploring!</h2>
        <p className="text-lg text-gray-200 mb-6">
          Dive into our articles and discover something new today. From coding
          tips to design inspirations, we've got you covered. Don't forget to
          check out our latest blogs!
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105">
          View Blogs
        </button>
      </div>
      <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Featured Content
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Getting Started with React
            </h3>
            <p className="text-gray-100 mb-4">
              This guide will help you get up and running with React, one of the
              most popular JavaScript libraries for building user interfaces.
            </p>
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200 transition">
              Read More
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Mastering Tailwind CSS
            </h3>
            <p className="text-gray-100 mb-4">
              Learn how to create responsive and visually appealing web designs
              using the utility-first Tailwind CSS framework.
            </p>
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200 transition">
              Read More
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-400 via-teal-500 to-green-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-white mb-4">
              JavaScript Best Practices
            </h3>
            <p className="text-gray-100 mb-4">
              Improve your JavaScript skills by learning essential best
              practices and techniques for writing clean and efficient code.
            </p>
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
