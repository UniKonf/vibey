import { SettingsContext } from '@/lib/context/settings';

import Image from 'next/image';
import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';

const Dashboard = () => {
  const { theme } = useContext(SettingsContext);

  return (
    <div className="flex flex-1">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
      />
      <div className="mt-16 hidden border-r-2 border-white/10 md:flex md:w-64 md:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto pt-5">
          <div className="mt-8 px-4">
            <label className="sr-only"> Search </label>
            <div className="relative">
              <div
                className={`pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ${
                  theme === 'light' ? 'text-gray-900' : 'text-gray-50'
                }`}
              >
                <svg
                  className="h-5 w-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>

              <input
                type="search"
                name=""
                id=""
                className="block w-full rounded-lg border border-gray-300 bg-white/10 py-2 pl-10 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                placeholder="Search here"
              />
            </div>
          </div>

          <div className="mt-6 px-4">
            <hr className="border-whitte/10" />
          </div>

          <div className="mt-6 flex flex-1 flex-col px-3">
            <div
              className={`space-x-4 ${
                theme === 'light' ? 'text-gray-900' : 'text-gray-50'
              }`}
            >
              <nav className="flex-1 space-y-2">
                <a
                  href="#"
                  title=""
                  className="group flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium transition-all duration-200"
                >
                  <svg
                    className="mr-4 h-5 w-5 flex-shrink-0 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Dashboard
                </a>

                <a
                  href="#"
                  className="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium  transition-all duration-200 hover:bg-indigo-600 hover:text-white"
                >
                  <svg
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Tickets
                </a>

                <a
                  href="#"
                  className="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-indigo-600 hover:text-white"
                >
                  <svg
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Agents
                </a>

                <a
                  href="#"
                  className="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-indigo-600 hover:text-white"
                >
                  <svg
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Customers
                  <svg
                    className="ml-auto h-6 w-4  group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </nav>

              <hr className="border-whitte/10" />

              <nav className="flex-1 space-y-2">
                <a
                  href="#"
                  className="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-indigo-600 hover:text-white"
                >
                  <svg
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  Products
                </a>

                <a
                  href="#"
                  className="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium  transition-all duration-200 hover:bg-indigo-600 hover:text-white"
                >
                  <svg
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  Orders
                </a>

                <a
                  href="#"
                  className="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium  transition-all duration-200 hover:bg-indigo-600 hover:text-white"
                >
                  <svg
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Analytics
                  <svg
                    className="ml-auto h-6 w-4  group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </nav>

              <hr className="border-whitte/10" />

              <nav className="flex-1 space-y-2">
                <a
                  href="#"
                  className="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium  transition-all duration-200 hover:bg-indigo-600 hover:text-white"
                >
                  <svg
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </a>
              </nav>
            </div>

            <div className="mt-20 pb-4">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-50 transition-all duration-200 hover:bg-gray-100"
              >
                <Image
                  className="mr-3 h-6 w-6 flex-shrink-0 rounded-full object-cover"
                  src="https://github.com/Chandraprakash-Darji.png"
                  alt=""
                  width={24}
                  height={24}
                  loading="lazy"
                />
                <svg
                  className={`ml-auto h-5 w-5  ${
                    theme === 'light' ? 'text-gray-900' : 'text-gray-50'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <main>
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8"></div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
