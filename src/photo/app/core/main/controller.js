export default ngModule => {
  ngModule.controller('MainCtrl', function MainCtrl(PhotoAPIService) {
    this.cases = [];

    PhotoAPIService
      .allPhotos()
      .then(response => {
        this.cases = response.data.feed.entry;
      })

  });
};
