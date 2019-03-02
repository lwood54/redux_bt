import { FETCH_POSTS, NEW_POST } from './types';

// apparently, dispatch sort of acts like a command to inject data
// export function fetchPosts() {
//         return function(dispatch) {
//                 fetch('https://jsonplaceholder.typicode.com/posts')
//                         .then(res => res.json())
//                         .then(posts =>
//                                 dispatch({
//                                         type: FETCH_POSTS,
//                                         payload: posts
//                                 })
//                         );
//         };
// }

export const fetchPosts = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(posts =>
                        dispatch({
                                type: FETCH_POSTS,
                                payload: posts
                        })
                );
};
