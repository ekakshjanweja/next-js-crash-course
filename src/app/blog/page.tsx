import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <nav className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-white font-bold text-xl">
                NextJS
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/hello-world"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Hello, World!
                </a>
                <a
                  href="/blog"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blogs
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center mt-20">
        <p className="text-3xl hover:text-blue-500 font-mono font-semibold">
          Personal Blog
        </p>
      </div>
      <div className="flex items-center justify-between h-16 max-w-md mx-auto">
        <div className="flex justify-center mt-5">
          <Link
            href="/blog/1"
            className="text-xl hover:text-blue-500 font-mono font-normal"
          >
            Blog 1
          </Link>
        </div>
        <div className="flex justify-center mt-5">
          <Link
            href="/blog/2"
            className="text-xl hover:text-blue-500 font-mono font-normal"
          >
            Blog 2
          </Link>
        </div>
        <div className="flex justify-center mt-5">
          <Link
            href="/blog/3"
            className="text-xl hover:text-blue-500 font-mono font-normal"
          >
            Blog 3
          </Link>
        </div>
      </div>
    </div>
  );
}
