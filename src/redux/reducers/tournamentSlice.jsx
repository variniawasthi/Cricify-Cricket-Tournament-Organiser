import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tournaments: [],
};

const tournamentSlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {
    setTournaments: (state, action) => {
      state.tournaments = action.payload;
    },
  },
});

export const { setTournaments } = tournamentSlice.actions;
export const selectTournaments = (state) => state.tournament.tournaments;
export default tournamentSlice.reducer;