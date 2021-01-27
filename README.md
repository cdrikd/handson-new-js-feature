# Fonctionnalité avancées de Javascript et bonnes pratiques

## Opération sur les tableaux (map, filter, reduce)
Methods of Array
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Opérateur de coalescence des nuls 
Nullish coalescing operator
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

## L'opérateur conditionnel | ternaire 
Conditional (ternary) operator
[doc](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## Double NON Logique
Double bang :gun: 
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!)

## ET Logique 
Logical AND
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)

## OU Logique
Logical OR
[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
 
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
