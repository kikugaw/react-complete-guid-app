const Card = (props) => {
  const classes = " card " + props.className;//cardの前後空白ないとエラーなる

  return <div className={classes}>{props.children}</div>;
};
export default Card;
