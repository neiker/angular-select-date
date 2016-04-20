import SelectDateFieldController from './date-field';
import getRange from '../helpers/range';

export default class SelectDateYearController extends SelectDateFieldController {
  setOptions() {
    if (this.parent) {
      const from = this.parent.getMinDate().getFullYear();
      const to = this.parent.getMaxDate().getFullYear();
      const reverse = new Date().getFullYear() > from;

      if (reverse) {
        this.years = getRange(to, from);
      } else {
        this.years = getRange(from, to);
      }
    }
  }
}
