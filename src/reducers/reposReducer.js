const initialState = [];

export default function(state = initialState,action) {
    switch (action.type) {
        case 'TOP_REPOS_ADD':
            return [...action.payload];
        case 'USER_REPOS_ADD':
            return [...action.payload];
        default: return state;
    }
};
