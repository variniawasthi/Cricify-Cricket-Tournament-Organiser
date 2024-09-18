import { configureStore } from "@reduxjs/toolkit";
import tournamentSlice from "./reducers/tournamentSlice";

const store = configureStore({
  reducer: {
    getTournament: tournamentSlice,
  },
});

export default store;