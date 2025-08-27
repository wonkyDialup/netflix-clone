import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
  myList: number[];
}

const initialState: UserState = {
  currentUser: {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://example.com/avatar.jpg'
  },
  isAuthenticated: true,
  myList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    addToMyList: (state, action: PayloadAction<number>) => {
      if (!state.myList.includes(action.payload)) {
        state.myList.push(action.payload);
      }
    },
    removeFromMyList: (state, action: PayloadAction<number>) => {
      state.myList = state.myList.filter(id => id !== action.payload);
    },
    clearMyList: (state) => {
      state.myList = [];
    },
  },
});

export const { setUser, addToMyList, removeFromMyList, clearMyList } = userSlice.actions;
export default userSlice.reducer;