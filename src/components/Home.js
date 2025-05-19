import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <main className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Find Your <span className="text-blue-600">Dream Job</span> Today
          </h1>
          <p className="text-lg text-gray-600">
            Connecting top talent with innovative companies worldwide. Browse
            thousands of opportunities tailored to your skills.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Browse Jobs
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Post a Job
            </button>
          </div>
        </div>

        {/* Right Column (Illustration) */}
        <div className="flex-1">
          <div className="bg-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
            <p className="text-gray-500">[Job Search Illustration]</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
