import { useParams } from "react-router-dom";
import TitleContent from "../layouts/TitleContent";
import { NewspaperIcon } from "@heroicons/react/24/solid";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";
import List from "@editorjs/list";
import NestedList from "@editorjs/nested-list";
import Checklist from "@editorjs/checklist";
import Image from "@editorjs/image";
// import Link from "@editorjs/link";
import Attaches from "@editorjs/attaches";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Code from "@editorjs/code";
import Raw from "@editorjs/raw";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Underline from "@editorjs/underline";
// import LinkAutocomplete from "@editorjs/link-autocomplete";
import TextVariantTune from "@editorjs/text-variant-tune";

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
  new EditorJS({
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
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Titre
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
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
