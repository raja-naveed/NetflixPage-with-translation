import i18n from "@/i18n";

const LanguageSwitcher = () => {

  return (
    <div className="mt-4 space-x-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => Language("en")}
      >
        English
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => Language("fn")}
      >
        French 
      </button>
    </div>
  );
};

export default LanguageSwitcher;
