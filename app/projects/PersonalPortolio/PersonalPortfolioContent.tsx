"use client";
export default function PersonalPortfolioContent() {
    return (
      <div className="space-y-10">
  
        <img
          src="/PersonalPortfolio/Home.png"
          className="rounded-xl border"
          alt="homepage"
        />
  
        {/* TITLE */}
        <div>
        <div className = "flex flex-row space-x-5">
          <h2 className="text-3xl font-bold font-montserrat">
            Personal Portfolio
          </h2>
          <a
            href="https://github.com/ksheth24/Personal-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          > 
            <img
              src = "/GitHub.png"
              className = "w-10 "
              alt = "githublogo"
            />
          </a>
          </div>
          <p className="mt-3 text-gray-600">
          Movie Store is a simple Django-based online movie storefront and review platform. It provides movie browsing and detail pages, user accounts (signup/login), review creation and editing, a shopping cart with a purchase flow, and an admin interface for managing content.
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
          <h3 className="mb-3 text-xl font-semibold font-poppins">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
<li>
  <span className="font-bold">Browse movies and view details:</span>{" "}
  A searchable, paginated listing of available movies with thumbnails. Each
  movie has a dedicated detail page showing synopsis, genre, release date,
  runtime, rating, available stock, full-size image, and a list of reviews.
  Detail pages also include an “Add to cart” control (if the item is in stock)
  and related-movie suggestions.
</li>
<img
  src = "/MovieStore/MoviePage.png"
  className = "w-200 mx-auto rounded-xl"
  alt = "MoviePage"
/>

<li>
  <span className="font-bold">
    Create, edit, and delete reviews (authenticated users):
  </span>{" "}
  Registered users can post reviews on movie pages that include a text body and
  a numeric rating. Users may edit or delete only their own reviews. Reviews are
  displayed on movie detail pages, aggregated into an average rating, and can be
  moderated by admins.
</li>
<img
  src = "/MovieStore/Review.png"
  className = "w-200 mx-auto rounded-xl"
  alt = "MoviePage"
/>
<li>
  <span className="font-bold">
    User accounts with signup, login, and profile:
  </span>{" "}
  Email/password signup and login flows with session-based authentication. The
  accounts app provides signup, login, logout, and a user profile page where
  users can view past orders, manage basic profile informatimage.pngion, and see their
  submitted reviews. Password reset flows can be enabled via Django’s built-in
  authentication views.
</li>
<img
  src = "/MovieStore/SignUp.png"
  className = "w-200 mx-auto rounded-xl"
  alt = "MoviePage"
/>
<img
  src = "/MovieStore/Login.png"
  className = "w-200 mx-auto rounded-xl"
  alt = "MoviePage"
/>
<li className="">
  <span className="font-bold">
    Shopping cart and purchase flow:
  </span>{" "}
  Add movies to a persistent cart (session-backed for anonymous users, account-backed for logged-in users). The cart shows line items, quantities, subtotal, and allows updating quantities or removing items. The purchase page simulates checkout (no payment gateway by default) and creates an order record that reduces item stock. Order receipts and history are available on the user’s account page.
</li>
<img
  src = "/MovieStore/Shopping.png"
  className = "w-200 mx-auto rounded-xl"
  alt = "MoviePage"
/>

<li className="">
  <span className="font-bold">
    Admin dashboard for content and order management:
  </span>{" "}
  Uses Django admin to let site maintainers add and edit movies, manage inventory,
  view and moderate reviews, and inspect orders. Admins can upload movie images,
  change prices, and adjust stock counts. The project is ready to integrate admin
  customizations and additional permissions if needed.
</li>
<img
  src = "/MovieStore/Admin.png"
  className = "w-200 mx-auto rounded-xl"
  alt = "MoviePage"
/>
          </ul>
        </div>
      </div>
    );
  }
  