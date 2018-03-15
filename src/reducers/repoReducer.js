const initialState = [];

export default function(state = initialState,action) {
    switch (action.type){
        case 'TOP_REPOS_ADD':
            return [...state, ...action.payload]
        default: return state;
    }
}
