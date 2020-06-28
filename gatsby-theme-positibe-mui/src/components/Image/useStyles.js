import {makeStyles} from "@material-ui/core/styles";
import {applyFilter} from "../../theme/apply-filter";
import {applyHeight} from "../../theme/apply-height";

const useStyles = makeStyles({
  root: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'top center',
    filter: applyFilter,
    height: applyHeight,
  }
})
export default useStyles