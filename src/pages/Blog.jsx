import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Understanding React Router DOM",
    summary:
      "Learn how to create dynamic and nested routes in React with this detailed guide.",
    content: `
      React Router DOM is an essential library for managing navigation in React applications. 
      It allows developers to define routes and render components dynamically based on the URL path. 
      In this guide, we’ll explore the core concepts of React Router DOM, including nested routes, dynamic routes, and route parameters.
      
      ### Why React Router DOM?
      React Router DOM enables Single Page Applications (SPAs) to mimic traditional multi-page applications. 
      This approach ensures a seamless user experience without full-page reloads.
      
      ### Key Features
      - **Dynamic Routes**: Routes can accept parameters for flexible navigation.
      - **Nested Routes**: Create a hierarchy of routes for structured applications.
      - **Route Guards**: Control access to certain routes using authentication.
      
      #### Example of a Dynamic Route
      \`\`\`javascript
      <Route path="/user/:id" element={<UserProfile />} />
      \`\`\`
      In this example, the \`:id\` parameter captures dynamic values from the URL.
      
      ### Best Practices
      - Use meaningful route names to enhance readability.
      - Always handle non-existent routes with a fallback (404) page.
      
      With React Router DOM, you can create robust navigation systems that improve user engagement and functionality.
    `,
  },
  {
    id: 2,
    title: "Mastering JavaScript Closures",
    summary:
      "Explore closures in JavaScript, one of the most powerful features of the language.",
    content: `
      Closures are one of JavaScript's most important concepts, providing a way to manage state and data encapsulation effectively.
      
      ### What Are Closures?
      A closure is created when a function retains access to its lexical scope, even when the function is executed outside of its original scope.
      
      ### Why Are Closures Useful?
      - **Data Encapsulation**: Hide implementation details from the global scope.
      - **Callback Functions**: Frequently used in event handlers and asynchronous programming.
      - **Functional Programming**: Closures enable techniques like currying and partial application.
      
      #### Example of a Closure
      \`\`\`javascript
      function makeCounter() {
        let count = 0;
        return function () {
          count++;
          return count;
        };
      }
      const counter = makeCounter();
      console.log(counter()); // 1
      console.log(counter()); // 2
      \`\`\`
      The \`makeCounter\` function creates a private \`count\` variable, and the returned function retains access to it.
      
      Closures are fundamental for advanced JavaScript programming and are often used in libraries like React.
    `,
  },
  {
    id: 3,
    title: "A Deep Dive into Tailwind CSS",
    summary:
      "Discover the power of utility-first CSS with Tailwind CSS and its advantages over traditional frameworks.",
    content: `
      Tailwind CSS is a utility-first CSS framework designed to speed up the development process while maintaining flexibility.
      
      ### Why Tailwind CSS?
      Unlike traditional CSS frameworks, Tailwind CSS provides a set of utility classes for building custom designs without leaving your HTML.
      
      ### Key Features
      - **Highly Customizable**: Tailwind's configuration file allows you to customize every aspect of the framework.
      - **Responsive Design**: Build responsive layouts easily with predefined classes.
      - **Consistent Design**: Ensures design consistency across the application.
      
      #### Example: Button Styles
      \`\`\`html
      <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Click Me
      </button>
      \`\`\`
      
      ### Pros and Cons
      - **Pros**:
        - Rapid prototyping.
        - Small final CSS size (with PurgeCSS).
      - **Cons**:
        - Steeper learning curve for new developers.
      
      Tailwind CSS is ideal for developers looking to build scalable, maintainable designs quickly.
    `,
  },
  {
    id: 4,
    title: "The Evolution of JavaScript Frameworks",
    summary:
      "Explore how JavaScript frameworks have evolved and their impact on modern web development.",
    content: `
      Over the past decade, JavaScript frameworks have transformed the way web applications are built.
      
      ### Early Days
      In the early 2000s, JavaScript was primarily used for simple interactivity. Libraries like jQuery dominated, simplifying DOM manipulation.
      
      ### The Rise of Frameworks
      The introduction of frameworks like AngularJS and React brought a paradigm shift:
      - **AngularJS**: Introduced two-way data binding and dependency injection.
      - **React**: Focused on component-based architecture and virtual DOM for performance.
      
      ### Modern Trends
      Today, frameworks like Vue.js, Svelte, and Solid.js continue to push boundaries, focusing on developer experience and performance.
      
      The evolution of JavaScript frameworks reflects the industry's pursuit of better tools for creating user-friendly, performant web applications.
    `,
  },
];
function Blog() {
  return (
    <div className="p-6 container mx-auto bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen">
      <h1 className="text-4xl font-extrabold text-white text-center mb-8">
        Blog Articles
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`}>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-900">
                {blog.title}
              </h2>
              <p className="text-gray-600 mt-2">{blog.summary}</p>
              <div className="mt-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Read More
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
