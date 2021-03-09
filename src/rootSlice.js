import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    engine: '{"name":"","price":-1}',
    body: '{"name":"","price":-1}',
    rimSize: '{"name":"","price":-1}',
    rimColor: '{"name":"","price":-1}',
    armchair: '{"name":"","price":-1}',
    upholstery: '{"name":"","price":-1}',
    accessories: '{"name":"","price":-1}',
  },
  reducers: {
    chooseEngine: (state, action) => {
      state.engine = action.payload;
    },
    chooseBody: (state, action) => {
      state.body = action.payload;
    },
    chooseRimSize: (state, action) => {
      state.rimSize = action.payload;
    },
    chooseRimColor: (state, action) => {
      state.rimColor = action.payload;
    },
    chooseArmchair: (state, action) => {
      state.armchair = action.payload;
    },
    chooseUpholstery: (state, action) => {
      state.upholstery = action.payload;
    },
    chooseAccessories: (state, action) => {
      state.accessories = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const {
  chooseEngine,
  chooseRimColor,
  chooseBody,
  chooseRimSize,
  chooseArmchair,
  chooseUpholstery,
  chooseAccessories,
} = rootSlice.actions;
