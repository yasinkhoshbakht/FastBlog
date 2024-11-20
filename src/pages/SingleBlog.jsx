import { useParams, Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Understanding React Router DOM",
    author: "Hossein Eskandari",
    date: "November 20, 2024",
    content: `
        React Router DOM is an essential library for managing navigation in React applications. 
        It allows developers to define routes and render components dynamically based on the URL path. 
        In this guide, we’ll explore the core concepts of React Router DOM, including nested routes, dynamic routes, and route parameters.
  
        ### Why React Router DOM?
        React Router DOM enables Single Page Applications (SPAs) to mimic traditional multi-page applications. 
        This approach ensures a seamless user experience without full-page reloads. With React Router DOM, you can build complex applications with minimal code.
  
        ### Key Features
        - **Dynamic Routes**: Routes can accept parameters for flexible navigation. This is particularly useful for applications that require dynamic content loading, such as blogs, e-commerce sites, and dashboards.
        - **Nested Routes**: Create a hierarchy of routes for structured applications. Nested routing is useful for scenarios where you have layouts, dashboards, or other sections of an app that share common components.
        - **Route Guards**: Control access to certain routes using authentication. React Router allows you to define protected routes that are only accessible by users who meet specific conditions, such as being logged in.
  
        ### Advanced Concepts
        - **Lazy Loading with React Router**: Lazy loading enables you to load parts of your application only when they are needed, improving performance by reducing the initial load time.
        - **Redirects**: React Router also provides an easy way to handle redirects and navigation when certain conditions are met, like after form submissions or successful logins.
  
        React Router DOM is an essential tool for React developers looking to create dynamic, user-friendly applications. Understanding these concepts will significantly improve your navigation and user experience in React apps.
  
        Here's an example of how to set up a dynamic route with React Router DOM:
  
        "javascript
        import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  
        function App() {
          return (
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Post />} />
              </Routes>
            </Router>
          );
        }
        "
      `,
  },
  {
    id: 2,
    title: "Mastering JavaScript Closures",
    author: "Pouya Fakhri",
    date: "November 18, 2024",
    content: `
        Closures are one of JavaScript's most important concepts, providing a way to manage state and data encapsulation effectively. In this article, we’ll dive deep into what closures are, how they work, and why they are so powerful.
  
        ### What is a Closure?
        A closure is created when a function is declared inside another function and the inner function retains access to the variables of the outer function, even after the outer function has finished execution. This feature allows us to maintain state between function calls without needing to use global variables.
  
        ### Example of a Closure
        Here's an example of a closure in JavaScript:
  
        "javascript
        function outerFunction() {
          let counter = 0;
          return function innerFunction() {
            counter++;
            console.log(counter);
          }
        }
  
        const increment = outerFunction();
        increment(); // 1
        increment(); // 2
        "
      `,
  },
  {
    id: 3,
    title: "A Deep Dive into Tailwind CSS",
    author: "Mohammad Mahdi Zanganeh",
    date: "November 15, 2024",
    content: `
        Tailwind CSS is a utility-first CSS framework designed to speed up the development process while maintaining flexibility. It allows you to style elements directly in your HTML, making it possible to build custom designs without writing custom CSS. In this article, we’ll explore the key features of Tailwind CSS and how to leverage it in your projects.
  
        ### What is Tailwind CSS?
        Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without having to write custom CSS. Instead of predefined components or themes, Tailwind lets you use utility classes like "bg-blue-500", "text-center", "px-4", and "py-2" to style your elements.
  
        ### Example: Building a Button
        Here's a simple example of how you can style a button with Tailwind CSS:
  
        "html
        <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Click Me
        </button>
        "
      `,
  },
  {
    id: 4,
    title: "The Evolution of JavaScript Frameworks",
    author: "Yasin Khoshbakht",
    date: "November 10, 2024",
    content: `
        Over the past decade, JavaScript frameworks have transformed the way web applications are built. From jQuery to modern frameworks like React, Angular, and Vue, the evolution of JavaScript frameworks has been rapid and revolutionary.
  
        ### The Rise of JavaScript Frameworks
        JavaScript frameworks emerged in response to the need for more efficient and organized ways of building web applications. Early on, web developers relied heavily on jQuery to manipulate the DOM, but as applications grew more complex, the limitations of jQuery became apparent.
  
        ### The Birth of Angular
        Angular, developed by Google, was one of the first major JavaScript frameworks to address these limitations. It introduced the concept of two-way data binding, dependency injection, and component-based architecture, revolutionizing how developers built web applications.
  
        ### React and the Component Revolution
        React, developed by Facebook, introduced a new paradigm for building user interfaces. Unlike Angular, React focused on creating reusable UI components. This approach allowed developers to build complex applications by combining smaller, isolated components, improving code maintainability and reusability.
  
        ### Vue: The Progressive Framework
        Vue, created by Evan You, combined the best features of both Angular and React. It focused on providing a progressive framework that could be incrementally adopted. Vue’s simplicity and flexibility made it a popular choice for developers who wanted a lightweight yet powerful framework.
  
        ### The Current Landscape
        Today, developers have many choices when it comes to selecting a JavaScript framework. React remains the most popular framework, but Angular and Vue still have strong communities and usage in specific industries.
  
        The evolution of JavaScript frameworks has made web development more efficient and maintainable. Each framework has contributed to the development of more sophisticated and user-friendly web applications.
      `,
  },
];

function SingleBlog() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  return (
    <div className="container mx-auto p-6">
      <article className="prose lg:prose-lg mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>
        <p className="text-sm text-gray-500 mt-1">
          By <span className="font-semibold">{blog.author}</span> on{" "}
          <span>{blog.date}</span>
        </p>
        <div className="mt-6">
          {blog.content.split("\n").map((paragraph, index) => (
            <p key={index} className="text-gray-800 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/blog"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Back to Blogs
        </Link>
        <div className="text-right">
          <p className="text-gray-500 text-sm">Explore More:</p>
          <ul className="list-disc text-gray-600">
            {blogs
              .filter((b) => b.id !== blog.id)
              .map((related) => (
                <li key={related.id}>
                  <Link
                    to={`/blog/${related.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {related.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
