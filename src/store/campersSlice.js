import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Асинхронный thunk для загрузки начальных данных
export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async () => {
    const response = await axios.get(
      "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
    );
    console.log("API response:", response.data);
    return response.data.items;
  }
);

// Асинхронный thunk для подгрузки дополнительных данных
export const fetchMoreCampers = createAsyncThunk(
  "campers/fetchMoreCampers",
  async (page) => {
    const response = await axios.get(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?page=${page}`
    );
    console.log("More campers fetched:", response.data);
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
    // Добавление/удаление из избранного
    toggleFavorite(state, action) {
      const camper = action.payload;
      const existingIndex = state.favorites.findIndex(
        (fav) => fav.id === camper.id
      );
      if (existingIndex === -1) {
        state.favorites.push(camper);
      } else {
        state.favorites.splice(existingIndex, 1);
      }
      // Обновляем избранное в localStorage
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    // Установка активных фильтров
    setFilters(state, action) {
      state.filters = action.payload;
    },

    // Сброс данных кемперов и страницы (например, при смене фильтров)
    resetCampers(state) {
      state.campers = [];
      state.page = 1;
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

export const { toggleFavorite, setFilters, resetCampers } =
  campersSlice.actions;

export default campersSlice.reducer;
