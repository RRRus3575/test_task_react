import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Асинхронный thunk для загрузки данных кемперов
export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async () => {
    const response = await axios.get(
      "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
    );
    return response.data;
  }
);

// Слайс для управления состоянием кемперов
const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [], // Список кемперов
    favorites: [], // Список избранных кемперов
    filters: {}, // Текущие фильтры
  },
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      state.campers = action.payload; // Записываем данные кемперов в состояние
    });
  },
});

// Экспортируем действия и редьюсер
export const { addToFavorites, setFilters } = campersSlice.actions;
export default campersSlice.reducer;
