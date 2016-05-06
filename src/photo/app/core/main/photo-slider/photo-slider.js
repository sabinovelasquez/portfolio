export default ngModule => {
  require('./photo-slider.scss');

  ngModule.directive('photoSlider', function photoSlider(FlickrAPIService) {
    return {
      template: require('./photo-slider.jade'),
      scope: {},
      bindToController: {
        slider: '=',
      },
      controllerAs: 'slider',
      controller: function photoSliderCtrl() {
        this.name = this.slider.gsx$nombre.$t;
        this.description = this.slider.gsx$descripcion.$t;
        this.flickrid = this.slider.gsx$flickrid.$t;
        this.category = this.slider.gsx$categoria.$t;
        this.cover = (id) => {
          FlickrAPIService.getCover(id).then(response => {
            this.coverUrl = response.data.sizes.size[10].source;
          });
        };
        FlickrAPIService
          .getAlbum(this.flickrid)
          .then(response => {
            const coverId = response.data.photoset.photo[0].id;
            this.cover(coverId);
          });
      },
    };
  });
};
