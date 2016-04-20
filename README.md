[Live demo](http://neiker.ninja/angular-select-date/)
## Basic example:

```html
<select-date name="birth_date" required min="100 years ago" max="18 years ago">
  <label>
    <span>Day</span>
    <select-date-day ng-model="main.birth_date.day" class="min-width"></select-date-day>
  </label>

  <label>
    <span>Month</span>
    <select-date-month ng-model="main.birth_date.month"></select-date-month>
  </label>

  <label>
    <span>Year</span>
    <select-date-year ng-model="main.birth_date.year"></select-date-year>
  </label>
</select-date>
```

#### Will result in:

![Example](http://g.recordit.co/B3GCzZhsMq.gif)

## TODO:
* Write a better README
* More tests
* Publish in npm and maybe in bower
