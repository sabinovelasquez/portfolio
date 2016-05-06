export default ngModule => {
  require('./main/single-case/case')(ngModule);
  require('./main/sidebar/sidebar')(ngModule);
  require('./main/photo-slider/photo-slider')(ngModule);
};
