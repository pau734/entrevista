import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: 'white',
    color: 'black',
  },
  buttonsContainer: {
    margin: 15,
    columnGap: 15,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  cardImage: {
    width: '100%',
    maxWidth: '120px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    padding: '16px',
    boxSizing: 'border-box',
  },
  dialogPaper: {
    borderRadius: '60px',
    padding: '16px',
  },
  centeredContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
}));

export default useStyles;
