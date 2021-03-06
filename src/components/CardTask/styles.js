import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  acordionPrincipal: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#465166',
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
  },
  descContainer: {
    gap: 20,
  },
  desc: {
    color: 'white',
  },
  icons: {
    color: 'white',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 15,
  },
  infoSec: {
    maxWidth: '100%',
  },
}))

export default useStyles
