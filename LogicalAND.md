# Opérateur logique &&

[Documentation MDM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)

## Dans une structure conditionnel

```javascript
const elt = 'rr'
const newElt = 23
if (elt && newElt) {
  
}
```

## Dans une affectation 

Si `expr1` vaut `true` alors `elt`  vaut `expr1` sinon `expr2`.

```javascript
const expr1 = undefined
const expr2 = 'val'
const elt = expr1 && expr2
```



