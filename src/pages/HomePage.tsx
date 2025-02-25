import { Link } from "react-router";

function HomePage() {
  return (
    <>
      <section className="relative h-[88vh] bg-primary " id="homepage">
        <div className="px-6 pt-5 flex flex-col lg:flex-row lg:justify-center  items-center lg:items-start">
          <div
            className="text-secondary text-center lg:text-left flex flex-col items-center lg:items-start gap-4 lg:gap-7 lg:w-[1000px] lg:ml-14 lg:pt-8"
            data-aos="fade-right"
            data-aos-duration="1700"
            data-aos-delay="550"
          >
            <div className="text-2xl sm:text-4xl lg:text-5xl font-bold lg:flex lg:flex-col lg:gap-2">
              <h1>Unlock Opportunities</h1>
              <h1>Land Your Dream</h1>
              <h1>Internship Today!</h1>
            </div>
            <div className="lg:w-[500px]">
              <h2 className="font-medium text-base">
                Find the perfect internship or job that fits your skills and
                goals. Take the next step in your career with ease!
              </h2>
            </div>
            <Link className="border-2 border-accent bg-accent cursor-pointer font-semibold text-sm px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition-transform duration-200 w-full sm:max-w-[500px] lg:w-[200px]" to={"/auth/register"}>
              Pre-register now
            </Link>
          </div>
          <img
            src="../images/Hero.png"
            alt=""
            className="object-contain h-[286px] max-w-md sm:w-[1000px] sm:h-[17rem] lg:h-[450px] lg:max-w-2xl "
            data-aos="fade-left"
            data-aos-duration="1700"
            data-aos-delay="550"
          />
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="w-full max-h-[100px] md:max-h-[150px]"
            viewBox="0 0 1470 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 18.3969L61.625 25.4025C123.25 32.9085 246.5 46.9196 369.75 39.9141C493 32.9085 616.25 3.88541 739.5 0.38262C862.75 -3.12017 986 18.3969 1109.25 25.4025C1232.5 32.9085 1355.75 25.4025 1417.37 21.8997L1479 18.3969V148H1417.37C1355.75 148 1232.5 148 1109.25 148C986 148 862.75 148 739.5 148C616.25 148 493 148 369.75 148C246.5 148 123.25 148 61.625 148H0V18.3969Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </>
  );
}

export default HomePage;
