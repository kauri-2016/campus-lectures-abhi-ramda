# Why Ramda ?
>There are already several excellent libraries with a **functional** flavor. Typically, they are meant to be general-purpose toolkits, suitable for working in **multiple paradigms**. Ramda has a more focused goal. We wanted a library designed specifically for a **functional programming** style, one that makes it easy to create **functional** pipelines, *one that never mutates user data.*
-> [source Ramada documentaion](http://ramdajs.com/0.21.0/index.html)

#### Multiple Programming paradigms:
Paradigm | Description | Realted Paradigm | Examples
---------|-------------|------------------|---------|
Functional | Treats computation as the evaluation of mathematical functions avoiding state and mutable data | Declarative | C++, Clojure, Coffeescript, Elixir, Erlang, F#, Haskell, Lisp, Python, Scala, SequenceL, SML
Imperative | Computation as statements that directly change a program state (datafields) |  |C, C++, Java, PHP, Python
Declarative | Defines computation logic without defining its detailed control flow | |SQL, regular expressions, CSS, Prolog
Object-oriented | Treats datafields as objects manipulated through pre-defined methods only | Procedural | Common Lisp, C++, C#, Eiffel, Java, PHP, Python, Ruby, Scala
-> [extracted from wikepedia](https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms)

##### *Imperative*
You tell the computer what you wnat to happen step by step

```js
getRemoteData("example.com", { data, error in
  if error == nil {
    parseData(data, { parsed, error in
      if error == nil {
        handleParsedData(parsed, { error in
          if error != nil {
            displayError(error)
          }
        })
      } else {
        displayError(error)
      }
    })
  } else {
    displayError(error)
  }
}
```
##### *Declarative*
You write code that describes what you want, but not necessarily how to get it (declare your desired results, but not the step-by-step):
```js
JSON.stringify(getRemoteData("example.com")
  .then(parseData)
  .then(handleParsedData)
  .onError(displayError));
```
##### *Functional*
It involves writing code that does not change state and does not mutate data
```js
JSON.stringify(const saturdayCasualJobs = jobs
    .filter( job => job.day === "Saturday" )
    .filter( job => job.type === "Casual" )
    .map( job => job.money )
    .reduce((previousValue , currentValue) => ((previousValue || 0) + currentValue)));
```

## Ramda is a library designed specifically for a functional programming style, one that makes it easy to create functional pipelines, one that never mutates user data.

*See examples.js for code examples*
