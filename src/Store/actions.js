export default function tick (date, interval) {
    return {
        type: 'TICK',
        by: {
            date,
            interval
        }
    };
}