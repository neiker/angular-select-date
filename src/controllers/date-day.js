import SelectDateFieldController from './date-field';
import getRange from '../helpers/range';
import monthDays from '../helpers/month-days';

export default class SelectDateDayController extends SelectDateFieldController {
  /* @ngInject */
  constructor($scope) {
    super();

    this.$scope = $scope;
  }

  $watch() {
    this.$scope.$watch(() => ({
      month: this.parent.fields.month.$viewValue,
      year: this.parent.fields.year.$viewValue,
    }), () => this.setOptions(), true);
  }

  setOptions() {
    const { year, month } = this.parent.fields;

    const max = monthDays(month.$viewValue, year.$viewValue);

    this.days = getRange(1, max);

    if (this.model && this.model.$viewValue > max) {
      this.model.$setViewValue(undefined);
    }
  }
}
