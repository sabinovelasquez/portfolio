export default ngModule => {
  require('./photo-thumb.scss');

  ngModule.directive('photoThumb', function photoThumb() {
    return {
      template: require('./photo-thumb.jade'),
      scope: {},
      bindToController: {
        product: '=',
      },
      controllerAs: 'thumb',
      controller: function PhotoThumbCtrl() {
        // this.add = () => CartService.add({product: this.product, single: true});
        // this.inCart = () => CartService.cartItems.find(cartItem => cartItem.product.product_id === this.product.product_id);
      },
    };
  });
};
