import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#2B2438] px-6 py-4 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight text-[#F6F3EC]">
          Notes
        </h1>

        <div className="flex gap-2">
          <Link
            to="/create"
            className="rounded-md px-4 py-2 text-sm font-medium text-[#F6F3EC]/80 transition hover:bg-white/10 hover:text-[#F6F3EC]"
          >
            New note
          </Link>

          <Link
            to="/notes"
            className="rounded-md bg-[#D4A017] px-4 py-2 text-sm font-medium text-[#2B2438] transition hover:bg-[#c4930f]"
          >
            My notes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;