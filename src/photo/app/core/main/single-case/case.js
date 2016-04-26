export default ngModule => {
  require('./case.scss');

  ngModule.directive('singleCase', function singleCase() {
    return {
      template: require('./case.jade'),
      scope: {},
      bindToController: {
        case: '=',
      },
      controllerAs: 'case',
      controller: function singleCaseCtrl() {
        this.name = this.case.gsx$nombre.$t;
        this.description = this.case.gsx$descripcion.$t;
        this.flickrid= this.case.gsx$flickrid.$t;
        this.category= this.case.gsx$categoria.$t;
      },
    };
  });
};