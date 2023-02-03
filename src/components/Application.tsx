import IApplication from "../domains/IApplication";

function Application({
  application: { href, imageSrc, name, description, last_updated_at },
}: {
  application: IApplication;
}) {
  return (
    <>
      <div className="flex flex-1 flex-col p-8">
        <a href={href} className="focus:outline-none">
          <img
            className="mx-auto h-32 w-32 flex-shrink-0 rounded-full border-dotted border-2 border-amber-300"
            src={imageSrc}
            alt=""
          />
          <h3 className="mt-6 text-sm font-medium text-gray-900">{name}</h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Description</dt>
            <dd className="text-sm text-gray-500">{description}</dd>
          </dl>
        </a>
      </div>
      <div>
        <div className="mt-3 -mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                {last_updated_at}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Application;
