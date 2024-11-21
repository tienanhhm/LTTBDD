// itemsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('items/fetchData', async () => {
  const response = await fetch('https://645315b2e9ac46cedf1d03f3.mockapi.io/hocSinh');
  return await response.json();
});

export const addItem = createAsyncThunk('items/addItem', async (title) => {
  const response = await fetch('https://645315b2e9ac46cedf1d03f3.mockapi.io/hocSinh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  return await response.json();
});

export const updateItem = createAsyncThunk('items/updateItem', async ({ id, title }) => {
  const response = await fetch(`https://645315b2e9ac46cedf1d03f3.mockapi.io/hocSinh/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  return await response.json();
});

export const deleteItem = createAsyncThunk('items/deleteItem', async (id) => {
  await fetch(`https://645315b2e9ac46cedf1d03f3.mockapi.io/hocSinh/${id}`, {
    method: 'DELETE',
  });
  return id;
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    data: [],
    loading: false,
    error: null,
    userName: '',
  },
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        const index = state.data.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.data = state.data.filter(item => item.id !== action.payload);
      });
  },
});

export const { setUserName } = itemsSlice.actions;

export default itemsSlice.reducer;