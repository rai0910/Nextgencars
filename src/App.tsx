import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#38393e] font-sans flex flex-col">
      {/* Header / Navbar */}
      <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-20">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold" style={{ color: "#a75a51" }}>
              NextGenCars
            </span>
          </div>
          {/* Nav */}
          <nav className="flex gap-6 text-base font-medium">
            <Link to="/new-cars" className="hover:text-[#a75a51]">
              New Cars
            </Link>
            <Link to="/used-cars" className="hover:text-[#a75a51]">
              Used Cars
            </Link>
            <Link to="/compare" className="hover:text-[#a75a51]">
              Compare
            </Link>
            <Link to="/news-reviews" className="hover:text-[#a75a51]">
              News & Reviews
            </Link>
            <Link to="/sell-car" className="hover:text-[#a75a51]">
              Sell Car
            </Link>
          </nav>
          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="rounded px-3 py-1.5 text-sm border border-[#a75a51] text-[#a75a51] hover:bg-[#a75a51] hover:text-white">
              Login
            </button>
            <button className="rounded px-3 py-1.5 text-sm bg-[#a75a51] text-white hover:bg-[#38393e]">
              Register
            </button>
          </div>
        </div>
      </header>
      {/* Main body - routes */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car/:carId" element={<CarDetailsPage />} />
          <Route path="/new-cars" element={<PlaceholderPage title="New Cars" />} />
          <Route path="/used-cars" element={<PlaceholderPage title="Used Cars" />} />
          <Route path="/compare" element={<PlaceholderPage title="Compare" />} />
          <Route path="/news-reviews" element={<PlaceholderPage title="News & Reviews" />} />
          <Route path="/sell-car" element={<PlaceholderPage title="Sell Car" />} />
        </Routes>
      </main>
      <footer className="w-full mt-10 border-t border-gray-200 bg-white p-4 text-xs text-gray-500 flex justify-center items-center">
        © 2025 NextGenCars. All rights reserved.
      </footer>
    </div>
  );
}

// HOMEPAGE component with all main sections
function HomePage() {
  const navigate = useNavigate();
  // Sample mock data for the car cards
  const mostSearchedCars = [
    {
      id: "scorpio-n",
      name: "Mahindra Scorpio N",
      img: "https://ext.same-assets.com/1686806612/2143724329.jpeg",
      price: "Rs 13.99 - 24.89 Lakh*",
    },
    {
      id: "xuv700",
      name: "Mahindra XUV700",
      img: "https://ext.same-assets.com/1686806612/1698976132.jpeg",
      price: "Rs 14.49 - 25.74 Lakh*",
    },
    {
      id: "thar-roxx",
      name: "Mahindra Thar ROXX",
      img: "https://ext.same-assets.com/1686806612/1853932331.jpeg",
      price: "Rs 12.99 - 23.09 Lakh*",
    },
    {
      id: "creta",
      name: "Hyundai Creta",
      img: "https://ext.same-assets.com/1686806612/8934495.jpeg",
      price: "Rs 11.11 - 20.50 Lakh*",
    },
  ];

  // Other sections' mock data can be added similarly if needed

  return (
    <>
      {/* Hero/Find your right car */}
      <section className="relative bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 pt-8 pb-8 px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-96 z-10">
            <h2 className="text-xl font-bold mb-4">Find your right car</h2>
            <form className="space-y-3">
              <div className="flex gap-2 mb-1">
                <button className="px-3 py-1 rounded bg-[#a75a51] text-white" type="button">
                  New Car
                </button>
                <button
                  className="px-3 py-1 rounded border border-[#a75a51] text-[#a75a51] bg-white"
                  type="button"
                >
                  Used Car
                </button>
              </div>
              <select className="w-full border rounded p-2 text-sm" defaultValue="">
                <option value="">Select Budget</option>
              </select>
              <select className="w-full border rounded p-2 text-sm" defaultValue="">
                <option value="">All Vehicle Types</option>
              </select>
              <button
                type="submit"
                className="w-full py-2 rounded bg-[#a75a51] text-white hover:bg-[#38393e]"
              >
                Search
              </button>
              <div className="text-sm pt-2 text-gray-500 underline cursor-pointer">Advanced Search</div>
            </form>
          </div>
          {/* Banner / slider */}
          <div className="flex-1 flex items-center justify-center w-full min-h-[250px] aspect-[16/6] rounded-lg overflow-hidden relative">
            <img
              src="https://ext.same-assets.com/1686806612/4048438205.jpeg"
              alt="Hero Banner"
              className="object-cover object-center w-full h-full rounded-lg"
            />
            <div className="absolute left-1/2 bottom-4 -translate-x-1/2 bg-white/70 rounded-full px-4 py-1 text-sm font-medium shadow">
              Kia Carens Clavis - More premium & feature loaded
            </div>
          </div>
        </div>
      </section>

      {/* Most searched cars */}
      <section className="container mx-auto bg-white rounded-xl mt-6 mb-3 p-5 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">The most searched cars</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-x-auto scrollbar-hide">
          {mostSearchedCars.map((car) => (
            <div
              key={car.id}
              className="bg-[#fafafa] border rounded-xl p-3 flex flex-col gap-1 cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/car/${car.id}`)}
            >
              <img src={car.img} alt={car.name} className="rounded w-full h-24 object-cover mb-1" />
              <div className="font-semibold">{car.name}</div>
              <div className="text-sm text-[#a75a51]">{car.price}</div>
              <button className="mt-2 rounded px-3 py-1 bg-[#fafafa] border border-[#a75a51] text-[#a75a51] text-xs">
                View May Offers
              </button>
            </div>
          ))}
        </div>
        <div className="text-right pt-2">
          <Link to="/new-cars" className="text-xs text-[#a75a51] underline">
            View All Searched Cars
          </Link>
        </div>
      </section>

      {/* Electric cars */}
      <section className="container mx-auto bg-white rounded-xl mt-6 mb-3 p-5 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Electric cars</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-x-auto scrollbar-hide">
          <div className="bg-[#fafafa] border rounded-xl p-3 flex flex-col gap-1">
            <img
              src="https://ext.same-assets.com/1686806612/3468535683.jpeg"
              alt="MG Windsor EV"
              className="rounded w-full h-24 object-cover mb-1"
            />
            <div className="font-semibold">MG Windsor EV</div>
            <div className="text-sm text-[#a75a51]">Rs 14 - 18.10 Lakh*</div>
            <button className="mt-2 rounded px-3 py-1 bg-[#fafafa] border border-[#a75a51] text-[#a75a51] text-xs">
              View May Offers
            </button>
          </div>
          <div className="bg-[#fafafa] border rounded-xl p-3 flex flex-col gap-1">
            <img
              src="https://ext.same-assets.com/1686806612/2822820227.jpeg"
              alt="Mahindra BE 6"
              className="rounded w-full h-24 object-cover mb-1"
            />
            <div className="font-semibold">Mahindra BE 6</div>
            <div className="text-sm text-[#a75a51]">Rs 18.90 - 26.90 Lakh*</div>
            <button className="mt-2 rounded px-3 py-1 bg-[#fafafa] border border-[#a75a51] text-[#a75a51] text-xs">
              View May Offers
            </button>
          </div>
          <div className="bg-[#fafafa] border rounded-xl p-3 flex flex-col gap-1">
            <img
              src="https://ext.same-assets.com/1686806612/964158899.jpeg"
              alt="Mahindra XEV 9e"
              className="rounded w-full h-24 object-cover mb-1"
            />
            <div className="font-semibold">Mahindra XEV 9e</div>
            <div className="text-sm text-[#a75a51]">Rs 21.90 - 30.50 Lakh*</div>
            <button className="mt-2 rounded px-3 py-1 bg-[#fafafa] border border-[#a75a51] text-[#a75a51] text-xs">
              View May Offers
            </button>
          </div>
          <div className="bg-[#fafafa] border rounded-xl p-3 flex flex-col gap-1">
            <img
              src="https://ext.same-assets.com/1686806612/1683584915.png"
              alt="MG Comet EV"
              className="rounded w-full h-24 object-cover mb-1"
            />
            <div className="font-semibold">MG Comet EV</div>
            <div className="text-sm text-[#a75a51]">Rs 7 - 9.84 Lakh*</div>
            <button className="mt-2 rounded px-3 py-1 bg-[#fafafa] border border-[#a75a51] text-[#a75a51] text-xs">
              View May Offers
            </button>
          </div>
        </div>
        <div className="text-right pt-2">
          <Link to="/new-cars" className="text-xs text-[#a75a51] underline">
            View All Electric Cars
          </Link>
        </div>
      </section>

      {/* Upcoming cars */}
      <section className="container mx-auto bg-white rounded-xl mt-6 mb-3 p-5 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Upcoming cars</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-x-auto scrollbar-hide">
          <div className="bg-[#fafafa] border rounded-xl p-3 flex flex-col gap-1">
            <img
              src="https://ext.same-assets.com/1686806612/3155598817.jpeg"
              alt="Volkswagen Golf GTI"
              className="rounded w-full h-24 object-cover mb-1"
            />
            <div className="font-semibold">Volkswagen Golf GTI</div>
            <div className="text-sm text-[#a75a51]">Rs 52 Lakh*</div>
            <button className="mt-2 rounded px-3 py-1 bg-[#fafafa] border border-[#a75a51] text-[#a75a51] text-xs">
              Alert Me
            </button>
          </div>
          <div className="bg-[#fafafa] border rounded-xl p-3 flex flex-col gap-1">
            <img
              src="https://ext.same-assets.com/1686806612/4170445748.jpeg"
              alt="Tata Altroz 2025"
              className="rounded w-full h-24 object-cover mb-1"
            />
            <div className="font-semibold">Tata Altroz 2025</div>
            <div className="text-sm text-[#a75a51]">Rs 6.75 Lakh*</div>
            <button className="mt-2 rounded px-3 py-1 bg-[#fafafa] border border-[#a75a51] text-[#a75a51] text-xs">
              Alert Me
            </button>
          </div>
          <div className="bg-[#fafafa] border rounded-xl p-3 flex flex-col gap-1">
            <img
              src="https://ext.same-assets.com/1686806612/4180912682.jpeg"
              alt="Kia Carens Clavis"
              className="rounded w-full h-24 object-cover mb-1"
            />
            <div className="font-semibold">Kia Carens Clavis</div>
            <div className="text-sm text-[#a75a51]">Rs 11 Lakh*</div>
            <button className="mt-2 rounded px-3 py-1 bg-[#fafafa] border border-[#a75a51] text-[#a75a51] text-xs">
              Alert Me
            </button>
          </div>
          <div className="bg-[#fafafa] border rounded-xl p-3 flex flex-col gap-1">
            <img
              src="https://ext.same-assets.com/1686806612/3465706841.jpeg"
              alt="Tata Harrier EV"
              className="rounded w-full h-24 object-cover mb-1"
            />
            <div className="font-semibold">Tata Harrier EV</div>
            <div className="text-sm text-[#a75a51]">Rs 30 Lakh*</div>
            <button className="mt-2 rounded px-3 py-1 bg-[#fafafa] border border-[#a75a51] text-[#a75a51] text-xs">
              Alert Me
            </button>
          </div>
        </div>
        <div className="text-right pt-2">
          <Link to="/new-cars" className="text-xs text-[#a75a51] underline">
            View All Upcoming Cars
          </Link>
        </div>
      </section>

      {/* Latest cars */}
      <section className="container mx-auto bg-white rounded-xl mt-6 mb-3 p-5 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Latest cars</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-x-auto scrollbar-hide">
          <div className="bg-[#fafafa] border rounded-xl p-3 flex flex-col gap-1">
            <img
              src="https://ext.same-assets.com/1686806612/4138524949.jpeg"
              alt="Hyundai Exter"
              className="rounded w-full h-24 object-cover mb-1"
            />
            <div className="font-semibold">Hyundai Exter</div>
            <div className="text-sm text-[#a75a51]">Rs 6 - 10.51 Lakh*</div>
            <button className="mt-2 rounded px-3 py-1 bg-[#fafafa] border border-[#a75a51] text-[#a75a51] text-xs">
              View May Offers
            </button>
          </div>
          <div className="bg-[#fafafa] border rounded-xl p-3 flex flex-col gap-1">
            <img
              src="https://ext.same-assets.com/1686806612/3468535683.jpeg"
              alt="MG Windsor EV"
              className="rounded w-full h-24 object-cover mb-1"
            />
            <div className="font-semibold">MG Windsor EV</div>
            <div className="text-sm text-[#a75a51]">Rs 14 - 18.10 Lakh*</div>
            <button className="mt-2 rounded px-3 py-1 bg-[#fafafa] border border-[#a75a51] text-[#a75a51] text-xs">
              View May Offers
            </button>
          </div>
          <div className="bg-[#fafafa] border rounded-xl p-3 flex flex-col gap-1">
            <img
              src="https://ext.same-assets.com/1686806612/245401660.jpeg"
              alt="Jeep Wrangler"
              className="rounded w-full h-24 object-cover mb-1"
            />
            <div className="font-semibold">Jeep Wrangler</div>
            <div className="text-sm text-[#a75a51]">Rs 67.65 - 73.24 Lakh*</div>
            <button className="mt-2 rounded px-3 py-1 bg-[#fafafa] border border-[#a75a51] text-[#a75a51] text-xs">
              View May Offers
            </button>
          </div>
          <div className="bg-[#fafafa] border rounded-xl p-3 flex flex-col gap-1">
            <img
              src="https://ext.same-assets.com/1686806612/3753655993.jpeg"
              alt="Toyota Innova Hycross"
              className="rounded w-full h-24 object-cover mb-1"
            />
            <div className="font-semibold">Toyota Innova Hycross</div>
            <div className="text-sm text-[#a75a51]">Rs 19.94 - 32.58 Lakh*</div>
            <button className="mt-2 rounded px-3 py-1 bg-[#fafafa] border border-[#a75a51] text-[#a75a51] text-xs">
              View May Offers
            </button>
          </div>
        </div>
        <div className="text-right pt-2">
          <Link to="/new-cars" className="text-xs text-[#a75a51] underline">
            View All Latest Cars
          </Link>
        </div>
      </section>
    </>
  );
}

// Simple placeholder routes for now
function CarDetailsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-[#a75a51]">Car Details Page (Work in Progress)</h1>
      <div className="bg-white p-4 rounded shadow">This is where car details will appear.</div>
    </div>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-[#a75a51]">{title}</h1>
      <div className="bg-white p-4 rounded shadow">This page is coming soon.</div>
    </div>
  );
}

export default App;
