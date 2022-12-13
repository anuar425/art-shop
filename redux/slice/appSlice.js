import { apiGetImage, apiGetImages } from "@/API/index";
import {
  createSlice,
  createAsyncThunk,
  createAction,
  nanoid,
} from "@reduxjs/toolkit";

// export const getImages = createAsyncThunk("app/getImages", (_) => {
//   try {
//     return apiGetImages();
//   } catch (error) {
//     console.log(error, "app/getImages/Error");
//   }
// });

// export const getImage = createAsyncThunk("app/getImage", (id) => {
//   try {
//     return apiGetImage(id);
//   } catch (error) {
//     console.log(error, "app/getImage/Error");
//   }
// });

const appSlice = createSlice({
  name: "app",
  initialState: {
    page: 1,
    images: Array.from(Array(20).keys(), (element) => ({
      name: "Name",
      path: `images/image (${element + 1}).jpg`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    })),
    image: null,
    loading: false,
    error: null,
  },
  reducers: {
    getImage: {
      reducer: (state, action) => {
        state.image = state.images[action.payload.index];
      },
      prepare: (index) => {
        const id = nanoid();
        return { payload: { id, index } };
      },
    },
  },

  // extraReducers: {
  //   // Get Images
  //   [getImages.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [getImages.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.images = action.payload;
  //   },
  //   [getImages.rejected]: (state, action) => {
  //     state.error = action.payload;
  //   },
  //   // Get Image
  //   [getImage.pending]: (state, action) => {
  //     state.image = action.payload;
  //   },
  //   [getImage.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.image = action.payload;
  //   },
  //   [getImage.rejected]: (state, action) => {
  //     state.error = action.payload;
  //   },
  // },
});

export const { getImage } = appSlice.actions;
export default appSlice.reducer;
