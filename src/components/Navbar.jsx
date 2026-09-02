import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="m-3 rounded-2xl border border-amber-600 bg-emerald-500 p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-300">Notes App</h1>

        {/* Navigation */}
        <div className="flex gap-3">
          <Link
            to="/create"
            className="rounded-lg bg-white px-4 py-2 text-blue-600 hover:bg-gray-100"
          >
            Create Note
          </Link>

          <Link
            to="/notes"
            className="rounded-lg bg-blue-800 px-4 py-2 text-white hover:bg-blue-900"
          >
            List Notes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
