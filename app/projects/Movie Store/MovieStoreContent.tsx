 "use client";

export default function MovieStoreContent() {
  return (
    <div className="space-y-6">

      <img src="/MovieStore/HomePage.png" className="rounded-xl border" alt="homepage" />

      {/* TITLE */}
      <div>
        <div className="flex flex-row items-center space-x-4">
          <h2 className="text-3xl font-bold font-montserrat">Movie Store</h2>
          <a href="https://github.com/ksheth24/Movie-Store" target="_blank" rel="noopener noreferrer">
            <img src="/GitHub.png" className="w-10" alt="githublogo" />
          </a>
        </div>
        <p className="mt-3 text-gray-600">
          A Django-based online movie storefront and review platform with browsing, user accounts, a shopping cart, and an admin interface for managing content.
        </p>
      </div>

       {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {[
            "Django",
            "Python",
            "MySQL",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

      {/* FEATURES */}
      <div>
        <h3 className="mb-4 text-xl font-semibold font-poppins">Key Features ⭐</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Browse & Discover", desc: "Searchable, paginated movie listing with thumbnails, detail pages showing synopsis, genre, rating, stock, and related-movie suggestions." },
            { title: "Reviews", desc: "Authenticated users can post, edit, and delete their own reviews with a numeric rating. Aggregated into an average score and moderatable by admins." },
            { title: "User Accounts", desc: "Email/password signup and login with session-based auth. Profile page shows past orders and submitted reviews. Supports Django's built-in password reset." },
            { title: "Shopping Cart", desc: "Persistent cart for both anonymous and logged-in users. Supports quantity updates, item removal, and a simulated checkout that logs order history." },
            { title: "Admin Dashboard", desc: "Django admin interface for managing movies, inventory, pricing, reviews, and orders. Ready for custom permissions and extended admin views." },
          ].map((f) => (
            <div key={f.title} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-1">{f.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

              <div>
          <h3 className="mb-3 text-xl font-semibold font-poppins ">Movie Store Demo 🎥</h3>
          <p className="mb-4 text-gray-600">
            Below is a demo of the Movie Store application.
          </p>
          <iframe
  className="rounded-xl w-full aspect-video"
  src="https://www.youtube.com/embed/RoKQvXwoVL0?si=C9R7iJzy01NmPbKY"
  title="OHQueue Demo"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
        </div>

    </div>
  );
}