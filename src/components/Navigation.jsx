import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <main className="w-full h-full ">
      <div className="navbar text-black px-4 lg:px-16">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="text-xl uppercase font-bold  text-therapyDarkGreen"
          >
            Therapyly
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm uppercase">
            <li>
              <a href="#about">about us</a>
            </li>

            <li>
              <a href="#services">services</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li>
              <a href="/faq">faq</a>
            </li>
            <li>
              <a href="/signin">signin</a>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? " border-b border-therapyDarkGreen" : " "
                }
                end
              >
                Dashboard
              </NavLink>
            </li>

            <li tabIndex={0}>
              <a>
                register
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="bg-white border border-therapyDarkGreen w-full">
                <li>
                  <a href="/signup/client-signup">patient</a>
                </li>
                <li>
                  <a href="/signup/therapist-signup">therapist</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu className="text-therapyDarkGreen w-6 h-6 " />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-therapyDarkGreen"
            >
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    isActive ? " text-therapyDarkGreen" : " "
                  }
                  end
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    isActive ? " text-therapyDarkGreen" : " "
                  }
                  end
                >
                  Signin
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup/client-signup"
                  className={({ isActive }) =>
                    isActive
                      ? " text-therapyDarkGreen capitalize"
                      : " capitalize "
                  }
                  end
                >
                  patient signup
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup/therapist-signup"
                  className={({ isActive }) =>
                    isActive
                      ? " text-therapyDarkGreen capitalize"
                      : " capitalize "
                  }
                  end
                >
                  therapist signup
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? " text-therapyDarkGreen" : " "
                  }
                  end
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
