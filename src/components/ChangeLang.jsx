import React, { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { languages } from "../data/data";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getItem, setItem } from "../utils/localStorage";

const ChangeLang = () => {
  const savedLangCode = getItem("appLangs");
  const savedLang =
    languages.find((lang) => lang.code === savedLangCode) || languages[0];
  const [currentLang, setCurrentLang] = useState(savedLang);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(savedLang.code);
  }, [i18n, savedLang]);

  return (
    <div className="relative w-60">
      <Listbox
        value={currentLang}
        onChange={(lang) => {
          setCurrentLang(lang);
          i18n.changeLanguage(lang.code);
          setItem("appLangs", lang.code);
        }}
      >
        {({ open }) => (
          <>
            <Listbox.Button className="outline-0 py-3 gap-2 w-full flex cursor-pointer border border-gray-300 shadow items-center justify-between text-gray-900 rounded-lg px-3.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-5">
                  <img
                    src={currentLang?.flag}
                    alt={currentLang?.name}
                    className="w-full h-full"
                  />
                </div>
                <span>{currentLang?.name}</span>
              </div>
              <div>
                {open ? (
                  <ChevronUp size={24} className="text-gray-900" />
                ) : (
                  <ChevronDown size={24} className="text-gray-900" />
                )}
              </div>
            </Listbox.Button>

            <Listbox.Options className="absolute h-60 overflow-y-auto outline-0 left-0 top-full mt-2 w-full bg-white border-gray-200 rounded-lg z-50 shadow">
              {languages.map((lang, index) => (
                <Listbox.Option
                  key={index}
                  value={lang}
                  className="hover:bg-gray-100 py-2 px-3 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-5">
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-full h-full"
                      />
                    </div>
                    <span>{lang.name}</span>
                  </div>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default ChangeLang;
