export default function HelloWorld() {
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
        <p className="text-3xl hover:text-purple-500 font-mono">
          Hello, World!
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <p className="text-xl hover:text-purple-500 font-mono">
          This is the hello world page.
        </p>
      </div>
    </div>
  );
}
