import SelectDateController from './controllers/date';
import SelectDateDayController from './controllers/date-day';
import SelectDateMonthController from './controllers/date-month';
import SelectDateYearController from './controllers/date-year';

export const selectDate = () => (
  {
    restrict: 'E',
    require: ['selectDate', '^form'],
    scope: {
      required: '@',
      name: '@',
      min: '@',
      max: '@',
    },
    link: (scope, element, attrs, [selectDateCtrl, formCtrl]) => {
      selectDateCtrl.setForm(formCtrl);
      selectDateCtrl.$watch();
    },
    controller: SelectDateController,
  }
);

const getFieldLink = type => (scope, element, attrs, controllers) => {
  /* eslint no-param-reassign: [2, { "props": false }] */

  const [parent, model, self] = controllers;

  parent.setField(type, model);

  self.setParent(parent);
  self.setModel(model);

  if (self.$watch) {
    self.$watch();
  }

  scope.className = attrs.class;
  element.removeAttr('class');
};

export const selectDateDay = () => (
  {
    restrict: 'E',
    require: ['^selectDate', 'ngModel', 'selectDateDay'],
    scope: {
      ngModel: '=',
      ngClass: '=selectNgClass',
    },
    link: getFieldLink('day'),
    controller: SelectDateDayController,
    controllerAs: '$dayCtrl',
    template: `
      <select
        class="{{className}}"
        name='{{$dayCtrl.parent.$scope.name}}-day'
        ng-model='ngModel'
        ng-class='ngClass'
        ng-options='day for day in $dayCtrl.days'
        ng-required='{{$dayCtrl.parent.$scope.required !== undefined ? true : false}}'>
        <option value=""></option>
      </select>
    `,
  }
);

export const selectDateMonth = () => (
  {
    restrict: 'E',
    require: ['^selectDate', 'ngModel', 'selectDateMonth'],
    scope: {
      ngModel: '=',
      ngClass: '=selectNgClass',
    },
    link: getFieldLink('month'),
    controller: SelectDateMonthController,
    controllerAs: '$monthCtrl',
    template: `
      <select
        class="{{className}}"
        name='{{$monthCtrl.parent.$scope.name}}-month'
        ng-model='ngModel'
        ng-class='ngClass'
        ng-options='month.id as month.name for month in $monthCtrl.months'
        ng-required='{{$monthCtrl.parent.$scope.required !== undefined ? true : false}}'>
        <option value=""></option>
      </select>
    `,
  }
);

export const selectDateYear = () => (
  {
    restrict: 'E',
    require: ['^selectDate', 'ngModel', 'selectDateYear'],
    scope: {
      ngModel: '=',
      ngClass: '=selectNgClass',
    },
    link: getFieldLink('year'),
    controller: SelectDateYearController,
    controllerAs: '$yearCtrl',
    template: `
      <select
        class="{{className}}"
        name='{{$yearCtrl.parent.$scope.name}}-year'
        ng-model='ngModel'
        ng-class='ngClass'
        ng-options='year for year in $yearCtrl.years'
        ng-required='{{$yearCtrl.parent.$scope.required !== undefined ? true : false}}'>
        <option value=""></option>
      </select>
    `,
  }
);
