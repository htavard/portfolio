import { defineStore } from "pinia"
import { themes } from "@/data/themes"

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: 'fall-theme', //default
    themes:  themes
  }),

  getters: {
    frameUrl: (state) => {
      const theme = state.themes.find(t => t.id === state.currentTheme)
      return theme ? theme.framePicture : "assets/pictures/fall/frameLeaf.png"
    }
  },

  actions: {
    setTheme(themeId: string) {
      document.body.classList.remove('fall-theme','winter-theme','spring-theme','summer-theme')
      document.body.classList.add(themeId)
      this.currentTheme = themeId
      localStorage.setItem('selected-theme', themeId)
    }
  }
})
