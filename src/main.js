import { selectDate, selectDateDay, selectDateMonth, selectDateYear } from './directives.js';
import selectDateTranslates from './translates-provider.js';

angular.module('SelectDate', [])
  .provider('selectDateTranslates', selectDateTranslates)
  /* @ngInject */
  .config((selectDateTranslatesProvider) => {
    selectDateTranslatesProvider.setLang('en');
  })
  .directive('selectDate', selectDate)
  .directive('selectDateDay', selectDateDay)
  .directive('selectDateMonth', selectDateMonth)
  .directive('selectDateYear', selectDateYear);
