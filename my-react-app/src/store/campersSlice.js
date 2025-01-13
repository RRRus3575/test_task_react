import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async () => {
    const response = await axios.get(
      "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
    );
    console.log("api", response);
    return response.data.items;
  }
);

export const fetchMoreCampers = createAsyncThunk(
  "campers/fetchMoreCampers",
  async (page) => {
    const response = await axios.get(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?page=${page}`
    );
    return response.data;
  }
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    filters: {},
    page: 1,
  },
  reducers: {
    addToFavorites(state, action) {
      const existingIndex = state.favorites.findIndex(
        (camper) => camper.id === action.payload.id
      );
      if (existingIndex === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(existingIndex, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campers = action.payload;
      })
      .addCase(fetchMoreCampers.fulfilled, (state, action) => {
        state.campers = [...state.campers, ...action.payload];
        state.page += 1;
      });
  },
});

export const { addToFavorites, setFilters } = campersSlice.actions;
export default campersSlice.reducer;
