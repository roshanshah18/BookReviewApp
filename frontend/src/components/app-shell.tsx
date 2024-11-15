import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";
import { User } from "./auth/user";
import { Link, useLocation } from "react-router-dom";
import { Logout } from "./auth/logout";
import { ImBooks } from "react-icons/im";
import Footer from "./footer";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "Login", href: "/login", current: false },
  { name: "Register Account", href: "/register", current: false },
  { name: "Reviews", href: "/addreview", current: false },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const showFooter = ["/", "/dashboard","/addreview"].includes(location.pathname);
 
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Disclosure as="nav" className="bg-[#333333]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ImBooks className="text-white text-3xl" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={clsx(
                          item.current
                            ? "bg-gray-900 text-[#f4f4f4]"
                            : "text-[#f4f4f4] hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-[#f4f4f4] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                  <Menu as="div" className="relative ml-3">
                    <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <User />
                    </MenuButton>
                    <MenuItems
                      className="absolute z-10 mt-1 w-20 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
                    >
                      <MenuItem>
                        <Logout />
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>
          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={clsx(
                    item.current
                      ? "bg-gray-900 text-[#f4f4f4]"
                      : "text-[#f4f4f4] hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
        <main className="flex-grow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
          <Toaster />
        </main>
        {showFooter && <Footer />}
      </div>
    </>
  );
}
