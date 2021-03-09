# Opérateur de coalescence des nuls ??

[Documentation MDM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

L'opérateur logique `||` est un opérateur booléen, il convertit l'opérande de gauche en booléen pour l'évaluation donc toutes les valeurs falsy sont prises en comptes : `0`, `''`, `false`,  `null`, `undefined`, `NaN`.

Par conséquent dans le code ci-dessous, `cpt` vaudra `23` même si 0 est un un nombre valide.
```javascript
const value = 0
const cpt = value || 23
```

L'opérateur `??`, quand à lui, renverra l'opérande de droite uniquement si l'opérande de gauche est `null` ou `undefined`.  
Dans l'exemple ci-dessous, realName vaudra une chaîne vide `''`.
```javascript
const name = ''
const realName = name ?? 'John Doe'
```

**Attention**  
Contrairement aux opérateurs logiques `&&` et `||`, l'opérateur de coalescence des nuls ne sont pas chaînables de cette manière : `const val = name ?? surname ?? nickname`.