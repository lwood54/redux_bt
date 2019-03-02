// this will evaluate any actions that are committed, such as fetching a post and creating a new post
// create TYPES for the actions, they are basically constants
import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
        items: [],
        item: {}
};

export default function(state = initialState, action) {
        switch (action.type) {
                case FETCH_POSTS:
                        return {
                                ...state,
                                items: action.payload
                        };
                default:
                        return state;
        }
}
