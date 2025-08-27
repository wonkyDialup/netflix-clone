import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type NavigationSection = 'home' | 'tv-shows' | 'movies' | 'new-popular' | 'my-list';

interface NavigationState {
  currentSection: NavigationSection;
  searchQuery: string;
  isSearchActive: boolean;
}

const initialState: NavigationState = {
  currentSection: 'home',
  searchQuery: '',
  isSearchActive: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentSection: (state, action: PayloadAction<NavigationSection>) => {
      state.currentSection = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSearchActive: (state, action: PayloadAction<boolean>) => {
      state.isSearchActive = action.payload;
    },
  },
});

export const { setCurrentSection, setSearchQuery, setSearchActive } = navigationSlice.actions;
export default navigationSlice.reducer;