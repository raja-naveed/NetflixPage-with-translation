// pages/index.js
import LanguageSwitcher from "@/components/LanguageSwitcher";
import i18n from "@/i18n";
import { TITLE_NAME } from "@/lib/constants";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("");

  const Language = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>{TITLE_NAME} || Home Page</title>
        <meta name="description" content="Netflix Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="py-4 px-8">
        <div className="flex justify-between items-center">
          <img
            src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/netflix.svg" // Replace with your logo
            alt="Netflix Logo"
            className="h-12"
          />
          <div>
            <Link href="/signin" className="text-white text-base px-6 bg-red-600 rounded py-3">
              Sign In
            </Link>
            <button
            className="px-3"
              onClick={() => Language("fn")}
            >
              Fr
            </button>
            <button

              onClick={() => Language("eng")}
            >
              Eng
            </button>
          </div>
        </div>
        {/* <LanguageSwitcher /> */}
      </header>

      {/* Banner */}
      <div className="h-[448px] lg:h-[600px] relative">
        <div className="absolute h-full w-full bg-gradient-to-t from-black to-transparent z-10" />
        <img
          src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg" // Replace with your banner image
          alt="Netflix Banner"
          className="h-full w-full object-cover z-0"
        />
        <div className="absolute top-1/4 left-8 w-1/3 z-20">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3">
            {t("netflixhome.heading")}
          </h1>
          <p className="text-xl lg:text-2xl max-w-md">
            {t("netflixhome.subheading")}
          </p>
          <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-800">
            {t("netflixhome.button")}
          </button>
        </div>
      </div>

      {/* Movie Categories */}
      <div className="px-8 py-6">
        <h2 className="text-2xl font-semibold">
        {t("netflixhome.popular")}
        </h2>
        {/* Add movie cards here */}
      </div>

      {/* Add more categories as needed */}
    </div>
  );
};

export default Home;
