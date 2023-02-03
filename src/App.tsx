import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/solid";
import "./App.css";
import Application from "./components/Application";
import appSciences from "./assets/images/app-sciences.jpg";
import appNews from "./assets/images/app-news.jpg";
import appDocs from "./assets/images/app-docs.jpg";
import appFaq from "./assets/images/app-faq.jpg";
import appBooks from "./assets/images/app-books.jpg";
import appBills from "./assets/images/app-bills.jpg";
import appDirectory from "./assets/images/app-directory.jpg";
import appSocial from "./assets/images/app-social.jpg";
import appEat from "./assets/images/app-eat.jpg";

const user = {
  name: "Benjamin Guimberteau",
  email: "b.guimberteau@mesvaccins.net",
  imageUrl:
    "https://images.unsplash.com/photo-1615807713086-bfc4975801d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
};

const navigation = [{ name: "Applications", href: "#", current: true }];

const userNavigation = [
  { name: "Votre profil", href: "#" },
  { name: "Configurations", href: "#" },
  { name: "Déconnexion", href: "#" },
];

const applications = [
  {
    id: 0,
    name: "Scientifiques",
    description:
      "Enrichissement des informations pour les maladies, vaccins, composants et autres domaine scientifique",
    imageSrc: appSciences,
    href: "#",
    last_updated_at: "Mise à jour il y a 3 heures",
  },
  {
    id: 1,
    name: "Nouvelles",
    description: "Rédaction des nouvelles pour le grand public, les professionels de santé ou les deux",
    imageSrc: appNews,
    href: "#",
    last_updated_at: "Mise à jour il y a 2 jours",
  },
  {
    id: 2,
    name: "Documentations",
    description: "Rédaction des documentations pour le grand public, les professionels de santé ou les deux",
    imageSrc: appDocs,
    href: "#",
    last_updated_at: "Mise à jour il y a 5 jours",
  },
  {
    id: 3,
    name: "Questions fréquentes",
    description: "Rédaction des questions fréquentes pour le grand public, les professionels de santé ou les deux",
    imageSrc: appFaq,
    href: "#",
    last_updated_at: "Mise à jour il y a 10 jours",
  },
  {
    id: 4,
    name: "GED",
    description: "Gestion Électronique des Documents pour les règles du SAD, les vaccins, les maladies et le site web",
    imageSrc: appBooks,
    href: "#",
    last_updated_at: "Mise à jour il y a 10 jours",
  },
  {
    id: 5,
    name: "Facturation",
    description: "Gestion des factures, clients et les paiements",
    imageSrc: appBills,
    href: "#",
    last_updated_at: "Mise à jour il y a 10 jours",
  },
  {
    id: 6,
    name: "Annuaire des professionnels de santé",
    description: "Gestion de l'annuaire des professionels de santé",
    imageSrc: appDirectory,
    href: "#",
    last_updated_at: "Mise à jour il y a 10 jours",
  },
  {
    id: 7,
    name: "Réseaux Sociaux",
    description: "Interractions sur les réseaux sociaux",
    imageSrc: appSocial,
    href: "#",
    last_updated_at: "Mise à jour il y a 10 jours",
  },
  {
    id: 8,
    name: "On mange où aujourd'hui ?",
    description: "Choix d'un lieu de restauration pour le midi",
    imageSrc: appEat,
    href: "#",
    last_updated_at: "Mise à jour il y a 10 jours",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="border-b border-gray-200 bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center text-amber-300 font-mono text-2xl antialiased font-bold">
                      <BoltIcon className="block h-8 w-auto lg:hidden" aria-hidden="true" />
                      <BoltIcon className="hidden h-8 w-auto lg:block" aria-hidden="true" />
                      ZEUS
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "border-indigo-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="button"
                      className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="sr-only">Ouvrir le menu utilisateur</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                          : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                        "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 pb-3">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user.name}</div>
                      <div className="text-sm font-medium text-gray-500">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Applications</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0">
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {applications.map((application) => (
                    <li
                      key={application.id}
                      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                    >
                      <Application application={application} />
                    </li>
                  ))}
                </ul>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
