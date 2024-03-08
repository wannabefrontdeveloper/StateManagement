import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPosts } from '../api/getPosts';
import { Post } from '../api/types';

export const fetchPosts = createAsyncThunk('posts/fetchUsers', getPosts);

interface PostsState {
  posts: {
    loading: boolean;
    data: Post[] | null;
    error: Error | null;
  };
}

const initialState: PostsState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.posts = {
          loading: true,
          data: null,
          error: null,
        };
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.posts.data = action.payload;
        state.posts.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action: PayloadAction<Error>) => {
        state.posts.error = action.payload;
        state.posts.loading = false;
      });
  },
});

export default postsSlice.reducer;
