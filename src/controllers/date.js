const relativeToDate = require('relative-to-date');

const VALID_FIELDS = ['day', 'month', 'year'];
const DEFAULT_MIN_DATE = '100 years ago';
const DEFAULT_MAX_DATE = 'today';

export default class SelectDateController {
  /* @ngInject */
  constructor($scope) {
    this.$scope = $scope;

    this.validations = [
      {
        name: 'required',
        validator: (value, rawValue) => {
          if (this.$scope.required !== undefined) {
            return !(rawValue.day || rawValue.month || rawValue.year);
          }

          return false;
        },
      },
      {
        name: 'min',
        validator: (value) => {
          if (value) {
            return value.getTime() < this.getMinDate().getTime();
          }

          return false;
        },
      },
      {
        name: 'max',
        validator: (value) => {
          if (value) {
            return value.getTime() > this.getMaxDate().getTime();
          }

          return false;
        },
      },
      {
        name: 'valid',
        validator: (value, rawValue) => {
          if (value) {
            return (rawValue.day && rawValue.day !== value.getUTCDate()) ||
              rawValue.month !== value.getUTCMonth() + 1 ||
              rawValue.year !== value.getUTCFullYear();
          }

          return !!(rawValue.day || rawValue.month || rawValue.year);
        },
      },
    ];

    this.fields = {
      month: {},
      year: {},
    };
  }

  getMinDate() {
    if (!this.min) {
      this.min = relativeToDate(this.$scope.min || DEFAULT_MIN_DATE);
    }

    return this.min;
  }

  getMaxDate() {
    if (!this.max) {
      this.max = relativeToDate(this.$scope.max || DEFAULT_MAX_DATE);
    }

    return this.max;
  }

  setField(name, field) {
    if (VALID_FIELDS.indexOf(name) === -1) {
      throw new Error('Invalid field name');
    }

    this.fields[name] = field;
  }

  setForm(form) {
    this.form = form;
  }

  $watch() {
    const { fields, form, $scope, validations } = this;
    const errors = {};

    $scope.$watch(() => ({
      day: fields.day ? fields.day.$modelValue : undefined,
      month: fields.month.$modelValue,
      year: fields.year.$modelValue,
    }), (exp) => {
      let { day } = exp;
      const { month, year } = exp;

      let valid = true;

      if (!fields.day) {
        day = 1;
      }

      const date = (year && month && day) ? new Date(year, month - 1, day) : undefined;

      validations.forEach(validation => {
        const fail = validation.validator(date, exp);

        if (fail && valid) {
          valid = false;
        }

        if (fail) {
          errors[validation.name] = true;
        } else {
          delete errors[validation.name];
        }
      });

      form.$setValidity($scope.name || 'date', valid, errors);
    }, true);
  }
}
