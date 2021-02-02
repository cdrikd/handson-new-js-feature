# Tips in JS 

## Infinite condition
Array includes [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)


## Assignement par switch

```javascript
const asso = {
  'male': 'IT IS A MALE',
  'female': 'IS IS A FEMALE',
  'alien': 'OH MY GOD',
  'default': 'GOOD QUESTION'
}
const getGenre = (type) => asso[type] || asso['default']
```

Au lieu de 

```javascript
const origine =
  selectType === "BOY"
    ? "good boy"
    : selectType === "GIRL"
    ? "good girl"
    : selectType === "BOY_AND_GIRL"
    ? "YEAHHHH"
    : "it is ok";
```