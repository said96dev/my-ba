import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center" p={3} sx={{ flexDirection: 'column-reverse' }}>
      <Box width="100%" mr={3}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box width="100%" display="flex" sx={{ flexDirection: 'row' , justifyContent: 'space-between' ,  alignItems: 'center' }} className="mb-1">
        <Typography>Progress</Typography>
        <Typography variant="body2" color="textSecondary">
          {`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    
  }
});

export default function LinearWithValueLabel() {
  const [bar, setBar] = useState(50);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={bar} />
    </div>
  );
}
