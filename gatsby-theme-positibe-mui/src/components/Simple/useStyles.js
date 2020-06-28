import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  // root: theme.components.Simple.root,
  children: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  }
}))

export default useStyles