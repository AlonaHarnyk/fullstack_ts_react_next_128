import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LangStore {
  lang: string;
  a: number;
  b: number;
  changeLang: (newLang: string) => void;
}

// const createWithTypes = create<LangStore>();
// const useStore = createWithTypes((set) => {})

export const useLangStore = create<LangStore>()(
  persist(
    (set) => {
      return {
        lang: "en",
        a: 5,
        b: 10,
        changeLang: (newLang) => {
          set({ lang: newLang });
        },
      };
    },
    {
      name: "app-lang",
      partialize: (state) => ({
        lang: state.lang,
      }),
    },
  ),
);

export const selectLang = (state: LangStore) => state.lang;
export const selectChangeLang = (state: LangStore) => state.changeLang;
