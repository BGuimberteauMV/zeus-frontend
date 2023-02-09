import "./App.css";
import Application from "./components/Application";
import NavigationBar from "./layouts/NavigationBar";
import TitleContent from "./layouts/TitleContent";
import appSciences from "./assets/images/app-sciences.jpg";
import appNews from "./assets/images/app-news.jpg";
import appDocs from "./assets/images/app-docs.jpg";
import appFaq from "./assets/images/app-faq.jpg";
import appBooks from "./assets/images/app-books.jpg";
import appBills from "./assets/images/app-bills.jpg";
import appDirectory from "./assets/images/app-directory.jpg";
import appSocial from "./assets/images/app-social.jpg";
import appEat from "./assets/images/app-eat.jpg";

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

function App() {
  return (
    <>
      <div className="min-h-full">
        <NavigationBar />
        <div className="py-10">
          <TitleContent title="Applications" heroicIconName="Squares2X2Icon" />
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
