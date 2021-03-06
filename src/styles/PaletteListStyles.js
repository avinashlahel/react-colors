export default {
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    container: {
        display: 'flex',
        width: '50%',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        // border: '1px solid white'
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        color: 'white'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,30%)',
        gridGap: '5%'
    }
};
