import axios from "axios"

const FETCH_GREETINGS = 'hello-rails-react/greetings/FETCH_GREETINGS'

const getGreetings = (payload) => ({
  type: FETCH_GREETINGS,
  payload,
})


const initialState = {
    greetings: []
}

export const fetchGreetingsFromApi = () => async (dispatch) => {
    const result = await axios.get('/v1/messages');
    const data = result.data.greetings
    dispatch(getGreetings(data));
  };

const greetingReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer