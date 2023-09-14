import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  favorites: JSON.parse(localStorage.getItem("localFavs")) || [],
  handlers: {
    handlerOfTheOuterModal: false,
    handlerOfTheInnerModal: false
  },
  status: "idle",
  error: null,
}

const favoriteSlice = createSlice({
  name: "favoritePhotos",
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      const repeated = state.favorites.some((photo) => photo.id === action.payload.id)
      if (!repeated && state.favorites.length <= 30) {
        state.favorites.push(action.payload)
        localStorage.setItem("localFavs", JSON.stringify(state.favorites))
        state.length += 1
      }
    },
    removePhoto: (state, action) => {
      state.favorites = state.favorites.filter(
        (photo) => photo.id !== action.payload.id
      )
      localStorage.setItem("localFavs", JSON.stringify(state.favorites))
      if (state.length > 0) {
        state.length -= 1
      }
    },
    editDescription: (state, action) => {
      console.log(action)
      const copyOfFavorites = [...state.favorites]
      const indexForEditing = copyOfFavorites.findIndex(
        (photo) => photo.id === action.payload.id
      )
      const newPhoto = {
        ...copyOfFavorites[indexForEditing],
        description: action.payload.newDescription,
      }
      copyOfFavorites[indexForEditing] = newPhoto
      state.favorites = copyOfFavorites
      localStorage.setItem("localFavs", JSON.stringify(state.favorites))

    },
    modalHandler: (state, action) => {
      if (action.payload.modal === 'outer') {
        state.handlers.handlerOfTheOuterModal = action.payload
      }
      if (action.payload.modal === 'inner') {
        state.handlers.handlerOfTheInnerModal = action.payload
      }
    }
  },
  extraReducers: {},
})

export default favoriteSlice.reducer
export const { addPhoto, removePhoto, editDescription, modalHandler } = favoriteSlice.actions
export const getFavPhotosStatus = (state) => state.favoritePhotos.status
export const getFavPhotos = (state) => state.favoritePhotos.favorites
export const getFavLength = (state) => state.favoritePhotos.favorites.length
export const modalCurrenStatus = (state) => state.favoritePhotos.handlers
