import { log } from "console";
import Link from "next/link";

export default async function UserList() {
  const users = await getUsers();
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
                <Link
                  href="/users"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Users
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-col justify-center mt-20 max-w-xl mx-auto">
        <p className="text-2xl hover:text-blue-500 font-mono font-normal">
          List Of Users
        </p>
        <p className="text-lg  font-mono font-normal">
          {users.map((user: any) => {
            return (
              <p className="text-lg hover:text-yellow-500 font-mono font-normal">
                Name:{user.name} Email:{user.email}
              </p>
            );
          })}
        </p>
      </div>
    </div>
  );
}

const getUsers = async () => {
  const apiResponse = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await apiResponse.json();

  return result;
};
