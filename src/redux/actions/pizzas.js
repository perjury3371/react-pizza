import axios from 'axios';

export const setLoaded = val => ({
    type: 'SET_LOADED',
    payload: val,
})

export const fetchPizzas = (sortBy, category, order) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    })
      axios.get(`/pizzas?${category!== null && category!==undefined ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
      dispatch(setPizzas(data));
    })
}

export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items,
});

