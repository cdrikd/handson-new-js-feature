# Fonctionnalité avancées de Javascript et bonnes pratiques

## Opération sur les tableaux (map, filter, reduce)
Methods of Array
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
[reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

```js
const notes = [14.5,8,19.5,19,18,7,10]
```
Multiplier chacun des éléments par 2, filtrer en ne gardant que les éléments pair et retourner la somme des valeurs restantes.

```js
const average = notes
                  .map(note => note * 2)
                  .filter(note => note % 2 === 0)
                  .reduce((acc, curr) => acc + curr, 0)
```
                 

## ET Logique 
Logical AND
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)

## OU Logique
Logical OR
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

## Opérateur de coalescence des nuls 
Nullish coalescing operator
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

## L'opérateur conditionnel | ternaire 
Conditional (ternary) operator
[doc](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## Double NON Logique
Double bang :gun: 
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!)
 
## Immutabilité
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

## Chaînage optionnel 
optional chaining
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## Paramètres du reste
Rest Parameters
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## La décomposition 
Spread Operator 
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Littéraux de gabarits
Template literals
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

___

## Bonnes pratiques
Array includes [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```
//Fonctionnalité avancées et bonnes pratiques. 
// ??
// map, filter reduce  
// ternary opérator
// || &&   ex: (a || []).map()
// Object Freeze sur les constantes avce const .. et map qui altère la const s'en s'en rendre compte
// ?.  sur variable, sur fonction rer?.()
// ...(cond ? {propd:value} : {})
// ['jj','kkk',].includes(mavar)
// !! 
// rest operator, spread operator ...  
// copie d'objet : plusieurs façon ... cloneDeep de lodash
// trimend 
// `${var}`
// accéder  à une propriété valorisé a[`${var}`]
// const a = { ri: 'uuu', [var] : 'coucou'} avec index 
// ??=
