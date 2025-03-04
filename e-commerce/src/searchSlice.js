import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: "",
    results: [],
    loading: false,
    error: null
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setResults: (state, action) => {
            state.results = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state) => {
            state.loading = true;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { setQuery, setResults, setLoading, setError } = searchSlice.actions;
export default searchSlice.reducer;
