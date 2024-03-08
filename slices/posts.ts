import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts } from '../api/getPosts';
import { Post } from '../api/types';

export const fetchPosts = createAsyncThunk('posts/fetchusers', getPosts);

interface PostsState {
  loading: boolean;
  data: Post[] | null;
  error: Error | null;
}

const initialState: PostsState = {
  loading: false,
  data: null,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;
