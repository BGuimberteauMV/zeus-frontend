import TitleContent from "../layouts/TitleContent";
import { NewspaperIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

const articles = [
  {
    id: 1,
    status: "publish",
    title: "Nouveau vaccin contre l'encéphalite japonaise",
    audience: "citizen",
    site: "MesVaccins.net",
    updated_at: "24/08/2009",
    published_at: "30/08/2009",
  },
  {
    id: 2,
    status: "publish",
    title: "Grippe A : près de 900 millions d'euros pour les vaccins",
    audience: "health_professional",
    site: "MesVaccins.net",
    updated_at: "24/08/2009",
    published_at: "30/08/2009",
  },
  {
    id: 3,
    status: "review",
    title: "Béthune : l'hôpital ouvre un centre de vaccinations internationales",
    audience: "both",
    site: "MedecineDesVoyages.net",
    updated_at: "24/08/2009",
    published_at: "30/08/2009",
  },
  {
    id: 4,
    status: "publish",
    title: "Cancer du col de l'utérus : Un vaccin généralisé pour éviter 71 à 82 % des cancers",
    audience: "citizen",
    site: "MesVaccins.net",
    updated_at: "24/08/2009",
    published_at: "30/08/2009",
  },
  {
    id: 5,
    status: "publish",
    title: "Vaccin anti condylomes pour les gays ?",
    audience: "health_professional",
    site: "MesVaccins.net",
    updated_at: "24/08/2009",
    published_at: "30/08/2009",
  },
  {
    id: 6,
    status: "review",
    title: "Grippe H1N1 : le généraliste en première ligne",
    audience: "both",
    site: "MedecineDesVoyages.net",
    updated_at: "24/08/2009",
    published_at: "30/08/2009",
  },
  {
    id: 7,
    status: "publish",
    title: "Grippe A : 94 millions de doses de vaccin pour la France",
    audience: "citizen",
    site: "MesVaccins.net",
    updated_at: "24/08/2009",
    published_at: "30/08/2009",
  },
  {
    id: 8,
    status: "publish",
    title: "Epidémie de choléra au Zimbabwe",
    audience: "health_professional",
    site: "MesVaccins.net",
    updated_at: "24/08/2009",
    published_at: "30/08/2009",
  },
  {
    id: 9,
    status: "review",
    title: "Grippe A (H1N1): la Calédonie possible 'préfiguration' de l'épidémie en métropole, selon Bachelot",
    audience: "both",
    site: "MedecineDesVoyages.net",
    updated_at: "24/08/2009",
    published_at: "30/08/2009",
  },
];

function NewsList() {
  function truncateString(str: string, num: number) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  function statusArticle(status: boolean) {
    if (status) {
      return <CheckBadgeIcon className="h-6 w-6 text-green-400" aria-hidden="true" />;
    } else {
      return <></>;
    }
  }

  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <TitleContent title="News" heroicIcon={<NewspaperIcon className="h-6 w-6" aria-hidden="true" />} />
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Ajouter une nouvelle
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      État
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Titre
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Audience
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Site
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Mise à jour le
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Publié le
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {articles.map((article) => (
                    <tr key={article.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {statusArticle(article.status === "publish")}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {truncateString(article.title, 80)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{article.audience}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{article.site}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{article.updated_at}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{article.published_at}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {truncateString(article.title, 80)}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsList;
