export default ngModule => {
  require('./sidebar.scss');

  ngModule.directive('sidebarMenu', function sidebarMenu() {
    return {
      template: require('./sidebar.jade'),
      scope: {},
      bindToController: {
        categories: '=',
      },
      controllerAs: 'side',
      controller: function sidebarMenuCtrl() {
        this.menu = [{'icon': 'home'}, {'icon': 'camera'}, {'icon': 'envelope'}];
        // this.categories = this.categories;
      },
    };
  });
};
