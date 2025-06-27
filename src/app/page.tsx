import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-center mb-6 leading-tight">
        Future-Proof Your Career: <br /> Jobs AI Can't Replace
      </h1>
      <p className="text-xl text-center max-w-2xl mb-10 opacity-90">
        Explore 12 essential professions that will continue to thrive in the age
        of artificial intelligence and automation.
      </p>
      <Link
        href="/jobs"
        className="px-8 py-4 bg-white text-indigo-700 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
      >
        Discover the Jobs
      </Link>
    </div>
  );
}
