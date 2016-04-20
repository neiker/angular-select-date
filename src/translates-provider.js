export default class selectDateTranslatesProvider {
  constructor() {
    this.translates = {
      en: {
        months: [
          'Junary',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
      },
      es: {
        months: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre',
        ],
      },
    };
  }

  addTranslate(name, translate) {
    this.translates[name] = translate;
  }

  setLang(lang) {
    if (!this.translates[lang]) {
      throw new Error(`There's no translates defined for "${lang}"`);
    }
    this.lang = lang;
  }

  getTranslate() {
    return this.translates[this.lang];
  }

  $get() {
    return this.getTranslate();
  }
}
