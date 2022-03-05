const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS_REQUEST = 'bookStore/books/FETCH_BOOKS_REQUEST';
const FETCH_BOOKS_SUCCESS = 'bookStore/books/FETCH_BOOKS_SUCCESS';
const FETCH_BOOKS_FAILURE = 'bookStore/books/FETCH_BOOKS_FAILURE';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1lCrfRVrbk6q6HYBRqBZ/books';

const initialState = {
  loading: false,
  book: [],
  error: '',
};

export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (payload) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload,
});

export const fetchBooksFailure = (payload) => ({
  type: FETCH_BOOKS_FAILURE,
  payload,
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        loading: false,
        book: [...state.book, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        book: [...state.book.filter((book) => book.item_id !== action.payload)],
      };
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        book: [...state.book, action.payload],
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export const fetchBooks = () => async (dispatch) => {
  try {
    dispatch(fetchBooksRequest());
    const response = await fetch(baseURL);
    const result = await response.json();
    const data = Object.entries(result);
    if (data) {
      const bookArr = [];
      Object.keys(data).forEach((key) => {
        bookArr.push(data[key]);
      });
      const bookData = bookArr.map((book) => ({
        item_id: book[0],
        title: book[1][0].title.split(':')[0],
        category: book[1][0].category,
      }));
      bookData.forEach((item) => {
        dispatch(fetchBooksSuccess(item));
      });
    }
  } catch {
    dispatch(fetchBooksFailure('Error: Data not fetched'));
  }
};

export const postBook = (bookObj) => async (dispatch) => {
  try {
    await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookObj),
    });
    dispatch(addBook(bookObj));
  } catch {
    dispatch(fetchBooksFailure('Error: Data not posted'));
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    dispatch(removeBook(id));
    await fetch(`${baseURL}/${id}`, {
      method: 'DELETE',
    });
  } catch {
    dispatch(fetchBooksFailure('Error: Book not deleted'));
  }
};

export default booksReducer;
