const GET_GREETING = 'greeting/GET_GREETING';

export const fetchGreetingFromApi = () => async (dispatch) => {
    const response = await fetch('/api/v1/greetings');
    const greeting = await response.json();
    if (response.ok) {
        dispatch({
            type: GET_GREETING,
            payload: greeting
        });
    }
};


export const greetingsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_GREETING:
            return action.payload;
        default:
            return state;
    }
}

/*const GET_GREETING = 'greeting/GET_GREETING';

const initialState = [];

export const fetchGreeting = (payload) => ({
	type: GET_GREETING,
	payload,
});

export const fetchGreetingFromApi = () =>async (dispatch) => {
	const res = await fetch('/api/v1/greetings/')
	const greeting = await res.json()
	console.log(greeting);
		dispatch(fetchGreeting(greeting))
}

export const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return [...state, action.payload];
    default:
      return state;
  }
};*/
