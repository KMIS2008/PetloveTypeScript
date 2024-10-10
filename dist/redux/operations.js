import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.baseURL = "https://petlove.b.goit.study/api";
const NEWS_URL = '/news';
const Notices_URL = '/notices';
const Friends_URL = '/friends';
const User_URL = '/users/current';
export const fetchnews = createAsyncThunk('news/allNews', async (pageNumber, thunkAPI) => {
    try {
        const response = await axios.get(`${NEWS_URL}?page=${pageNumber}&limit=6`);
        return response.data;
    }
    catch (e) {
        toast.error(`Error: ${e.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const fetchNewsByKeyword = createAsyncThunk('news/keywordNews', async ({ keyword, pageNumber }, thunkAPI) => {
    try {
        const response = await axios.get(`${NEWS_URL}?keyword=${keyword}&page=${pageNumber}&limit=6`);
        return response.data;
    }
    catch (e) {
        toast.error(`Error: ${e.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const fetchnotices = createAsyncThunk('notices', async (pageNumber, thunkAPI) => {
    try {
        const response = await axios.get(`${Notices_URL}?page=${pageNumber}&limit=6`);
        return response.data;
    }
    catch (e) {
        toast.error(`Error: ${e.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const fetchnoticesByKeyword = createAsyncThunk('notices/keywordNotice', async ({ keyword, pageNumber }, thunkAPI) => {
    try {
        const response = await axios.get(`${Notices_URL}?keyword=${keyword}&page=${pageNumber}&limit=6`);
        return response.data;
    }
    catch (e) {
        toast.error(`Error: ${e.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const fetchNoticesId = createAsyncThunk('notices/id', async (_id, thunkAPI) => {
    try {
        const response = await axios.get(`${Notices_URL}/${_id}`);
        return response.data;
    }
    catch (e) {
        toast.error(`Error: ${e.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const addNotices = createAsyncThunk('notices/favorites/add', async (_id, thunkAPI) => {
    try {
        const response = await axios.post(`${Notices_URL}/favorites/add/${_id}`);
        return response.data;
    }
    catch (e) {
        toast.error(`Error: ${e.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const removeNotices = createAsyncThunk('notices/favorites/remove', async (_id, thunkAPI) => {
    try {
        const response = await axios.delete(`${Notices_URL}/favorites/remove/${_id}`);
        return response.data;
    }
    catch (e) {
        toast.error(`Error: ${e.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const fetchFriends = createAsyncThunk('friends', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${Friends_URL}`);
        return response.data;
    }
    catch (e) {
        toast.error(`Error: ${e.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const addPet = createAsyncThunk('pets/add', async ({ title, name, species, sex, birthday, imgURL }, thunkAPI) => {
    try {
        const response = await axios.post(`${User_URL}/pets/add`, { title, name, species, sex, birthday, imgURL });
        return response.data;
    }
    catch (e) {
        toast.error(`Error: ${e.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const removePet = createAsyncThunk('pets/remove', async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`${User_URL}/pets/remove/${id}`);
        return response.data;
    }
    catch (e) {
        toast.error(`Error: ${e.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const fetchUserFull = createAsyncThunk('user/full', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${User_URL}/full`);
        return response.data;
    }
    catch (e) {
        toast.error(`Error: ${e.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const fetchUserEdit = createAsyncThunk('user/edit', async (info, thunkAPI) => {
    try {
        const response = await axios.patch(`${User_URL}/edit`, info);
        return response.data;
    }
    catch (e) {
        toast.error(`Error: ${e.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const getNoticesFilter = createAsyncThunk('notices/filter', async ({ page = 1, limit = 6, name, category, gender, species, location, popularity, price }, thunkApi) => {
    const params = new URLSearchParams();
    params.append('page', page.toString());
    params.append('limit', limit.toString());
    if (name) {
        params.append('keyword', name);
    }
    if (category) {
        params.append('category', category);
    }
    if (gender) {
        params.append('gender', gender);
    }
    if (species) {
        params.append('species', species);
    }
    if (location) {
        params.append('locationId', location);
    }
    if (popularity !== undefined) {
        params.append('byPopularity', popularity.toString());
    }
    if (price !== undefined) {
        params.append('byPrice', price.toString());
    }
    try {
        const response = await axios.get(`${Notices_URL}?${params.toString()}`);
        return response.data;
    }
    catch (error) {
        toast.error(`Error: ${error.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkApi.rejectWithValue({
            message: error.message,
            code: error.response.status,
        });
    }
});
//# sourceMappingURL=operations.js.map