const ADD_CATEGORIE = 'categorieStore/categories/ADD_CATEGORIE';
const REMOVE_CATEGORIE = 'bookStore/categorie/REMOVE_CATEGORIE';
const initialState = [];

export const addCategorie = (payload) => ({
  type: ADD_CATEGORIE,
  payload,
});
export const removeCategorie = (payload) => ({
  type: ADD_CATEGORIE,
  payload,
});
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORIE:
      return [...state, action.payload];
    case REMOVE_CATEGORIE:
      return state.filter((categorie) => categorie.id !== action.payload);
    default:
      return state;
  }
};
export default categoriesReducer;
