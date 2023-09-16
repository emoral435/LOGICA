import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface Palette { // DEFINE PALLETE FOR EACH FORMAT
    main: string,
    light: string,
    dark: string,
    contrastText: string
}

export interface ThemeState {
    primary: Palette,
    complimentary: Palette,
    party: Palette
}

const main: Palette =  { // palette to be used generally
    main: "#1b1b1d", // THIS IS A DARK COLOR
    light: "#242526",
    dark: "#030303",
    contrastText: "#000000",
}

const secondary: Palette =  { // this is the complimentary / secondary palette
    main: "#000000",
    light: "FIXME",
    dark: "FIXME",
    contrastText: "FIXME",
}

const fun: Palette =  { // this is the party palette, so its pretty flexible
    main: "FIXME",
    light: "FIXME",
    dark: "FIXME",
    contrastText: "FIXME",
}

const initialTheme: ThemeState = {
    primary: main,
    complimentary: secondary,
    party: fun
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialTheme,
  reducers: {
    // NOTE these are kept here so that we can understand / reference to official documentation when it comes to making reducers for future things we need to implement for the store item
    // increment: (state) => {
    //     state.value += 1
    //   },
    //   decrement: (state) => {
    //     state.value -= 1
    //   },
    //   // Use the PayloadAction type to declare the contents of `action.payload`
    //   incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload
    //   },
  },
})

// Action creators are generated for each case reducer function 
// export const { increment, decrement, incrementByAmount } = counterSlice.actions NOTE this is commented out for reference if we did use the actual reducers

export default themeSlice.reducer