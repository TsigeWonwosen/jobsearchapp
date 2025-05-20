import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="mt-8 relative flex flex-col justify-center  items-center h-full w-full    md:flex-row md:justify-between text-gray-300 gap-8 md:gap-4 ">
      <div className="px-4 flex-1 flex flex-col justify-center items-center  gap-6 md:items-start max-w-[600px] z-10">
        <h1 className="h-auto w-auto text-3xl font-bold mb-1 ">
          Find Your <span className="text-white">Dream Job</span> Today
        </h1>
        <p className="h-auto w-auto text-lg text-gray-300">
          Connecting top talent with innovative companies worldwide. Browse
          thousands of opportunities tailored to your skills.
        </p>
        <p className="h-auto w-auto text-lg text-gray-300">
          With the workplace changing so quickly, follow the companies that you
          would love to work in and stay up-to-date with new opportunities near
          you and within your area of expertise.
        </p>
        <p className="h-auto w-auto text-lg text-gray-300">
          Find new opportunities, grow your network and build up your career
        </p>
        <div className="h-auto  mt-4 w-auto flex justify-start items-center gap-4">
          <Link
            to="/jobs"
            className="h-auto"
          >
            <button className="h-auto px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition">
              Browse Jobs
            </button>
          </Link>
          <Link
            to="/contact"
            className="h-auto"
          >
            <button className="h-auto px-6 py-2 border border-blue-800 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <img
        src="/header.svg"
        alt="Header"
        className=" hidden  image-svg lg:block "
      />
    </main>
  );
};

export default HomePage;
