import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    selectSize: [3, 4, 5],
    size: 3,
    ships: 3,
    play: false,
    currentPlayer: null,
    player1: [],
    player2: []
  },
  reducers: {
    reset: (state) => {
      state.play = false;
      state.player1 = [];
      state.player2 = [];
    },
    size: (state, action) => {
      state.size = action.payload;
      state.ships = action.payload;
    },
    ships: (state, action) => {
      state.ships = action.payload;
    },
    play: (state, action) => {
      state.play = true;
      state.currentPlayer = action.payload;
    },
    movePlayer1: (state, action) => {
      state.player1 = [...state.player1, action.payload];
      state.currentPlayer = "player2";
    },
    movePlayer2: (state, action) => {
      state.player2 = [...state.player2, action.payload];
      state.currentPlayer = "player1";
    }
  }
});

export const {
  reset,
  size,
  ships,
  play,
  movePlayer1,
  movePlayer2
} = boardSlice.actions;

export const selectBoard = (state) => state.board;

export default boardSlice.reducer;
