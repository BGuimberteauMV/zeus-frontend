function TitleContent({ title, heroicIcon }: { title: string; heroicIcon: any }) {
  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="flex flex-shrink-0 items-center text-3xl font-bold leading-tight tracking-tight text-gray-900">
            {heroicIcon} &nbsp;{title}
          </h1>
        </div>
      </header>
    </>
  );
}

export default TitleContent;
