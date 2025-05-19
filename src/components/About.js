const AboutPage = () => {
  return (
    <main className="mt-8  flex flex-col justify-start  items-center h-full w-full    md:flex-row md:justify-between text-gray-300 gap-8 md:gap-6 ">
      <div className="px-4 flex flex-col items-start w-full h-auto text-gray-300 text-lg gap-4 max-w-[600px]">
        <h1 className="w-full text-3xl font-bold  bg-red">About Jobs.</h1>
        <div className="w-full h-auto flex flex-col gap-2">
          <p>
            JobsApp is a modern platform designed to simplify the job search
            process for candidates and streamline hiring for employers.
          </p>
          <p>
            Built with cutting-edge technology, our mission is to reduce
            friction in the recruitment process through intuitive design and
            smart matching.
          </p>
        </div>
      </div>

      <div className="px-4 w-full h-auto mt-4 flex flex-col items-start justify-start  min-h-[200px] gap-4 ">
        <h2 className="h-auto  text-3xl font-semibold ">Our Tech Stack</h2>
        <div className="flex flex-wrap justify-start gap-4 w-full h-auto ">
          {["React", "Tailwind CSS", "Node.js", "MongoDB", "AWS"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#CFD2D6] text-gray-700 rounded-full"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
