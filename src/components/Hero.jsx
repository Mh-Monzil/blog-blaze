import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className="hero -mt-24">
      <div className="hero-content text-center">
        <div className="max-w-lg space-y-2">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-secondary via-teal-400 to-primary text-transparent bg-clip-text animate-gradient bg-300% h-14">
            Welcome to BlogBlaze
          </h1>
          <p className="py-6">
            BlogBlaze is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>
          <div className="flex justify-center gap-5">
            <Link
              to={"/blog"}
              className="relative inline-block px-4 py-3 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Read Blogs
              </span>
            </Link>

            <Link
              className="relative inline-block px-4 py-3 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Bookmarks
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
