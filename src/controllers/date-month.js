import SelectDateFieldController from './date-field';

export default class SelectDateMonthController extends SelectDateFieldController {
  /* @ngInject */
  constructor(selectDateTranslates) {
    super();

    this.translates = selectDateTranslates;
  }

  setOptions() {
    this.months = this.translates.months.map((name, key) => ({ id: key + 1, name }));
  }
}
