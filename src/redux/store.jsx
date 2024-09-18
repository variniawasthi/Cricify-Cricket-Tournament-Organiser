import { conifgureStore } from "@reduxjs/toolkit";
import tournamentSlice from "./reducers/tournamentSlice";

const store = conifgureStore({
  reducer: {
    getTournament: tournamentSlice,
  },
});

export default store;