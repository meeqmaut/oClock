export default function reducer( state={ date: new Date(), interval: null}, action ) {
    switch (action.type) {
        case 'TICK':
           return ( 
            state.date = action.by.date,
            state.interval = action.by.interval
           )
        default:
            return state;
    }
}