export default ngModule => {
  ngModule.controller('MainCtrl', function MainCtrl(PhotoAPIService) {
    const __ = require('underscore');
    this.cases = [];
    this.categories = [];
    PhotoAPIService
      .allPhotos()
      .then(response => {
        this.cases = response.data.feed.entry;
        angular.forEach(this.cases, (value) => {
          this.categories.push(value.gsx$categoria.$t);
          this.categories = __.uniq(this.categories);
        });
      });
  });
};
