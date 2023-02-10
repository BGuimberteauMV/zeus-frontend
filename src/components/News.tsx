import { useParams } from "react-router-dom";
import TitleContent from "../layouts/TitleContent";
import { NewspaperIcon } from "@heroicons/react/24/solid";
import EditorJS from "@editorjs/editorjs";
const Header = require("@editorjs/header");
const Quote = require("@editorjs/quote");
const Warning = require("@editorjs/warning");
const Delimiter = require("@editorjs/delimiter");
const List = require("@editorjs/list");
const NestedList = require("@editorjs/nested-list");
const Checklist = require("@editorjs/checklist");
const Image = require("@editorjs/image");
// const Link = require("@editorjs/link");
const Attaches = require("@editorjs/attaches");
const Embed = require("@editorjs/embed");
const Table = require("@editorjs/table");
const Code = require("@editorjs/code");
const Raw = require("@editorjs/raw");
const Marker = require("@editorjs/marker");
const InlineCode = require("@editorjs/inline-code");
const Underline = require("@editorjs/underline");
// const LinkAutocomplete = require("@editorjs/link-autocomplete");
const TextVariantTune = require("@editorjs/text-variant-tune");

export const EDITOR_JS_TOOLS = {
  header: Header,
  quote: Quote,
  warning: Warning,
  delimiter: Delimiter,
  list: List,
  nested_list: NestedList,
  checklist: Checklist,
  image: Image,
  // link: Link,
  attaches: Attaches,
  embed: Embed,
  table: Table,
  code: Code,
  raw: Raw,
  marker: Marker,
  inline_code: InlineCode,
  underline: Underline,
  // link_autocomplete: LinkAutocomplete,
  text_variant_tune: TextVariantTune,
};

function News() {
  let { newsId } = useParams();
  const title = newsId === undefined ? "Ajouter une nouvelle" : "Modifier une nouvelle";
  const ReactEditorJS = new EditorJS({
    placeholder: "Commencez à rédiger votre nouvelle",
    tools: EDITOR_JS_TOOLS,
  });

  return (
    <>
      <TitleContent title={title} heroicIcon={<NewspaperIcon className="h-6 w-6" aria-hidden="true" />} />
      <div className="mt-8 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white md:p-6 lg:p-8">
        <form className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                  Titre
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="content-address" className="block text-sm font-medium text-gray-700">
                  Contenu
                </label>
                <div id="editorjs" className="mt-1"></div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default News;
