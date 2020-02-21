# Clicky Game
A mild memory game where you click the images you haven't clicked before, each time you click the position shuffles. The highest possible score is 16

## Tech Used
A list of what was used to build this app

#### React
React is used as the structure of this app. Utilizing components to build an easily restructurable webpage

#### Radium
Radium is used primarily for the hover attribute for the card objects. Import radium from radium, then It implements the style as an object to with the structure of:

``` javascript
const style {
    base:{
        '....': 'some param'
    }
}
```
and during the export run the command as export default Radium(your component).

#### React Router Dom
React Router is used to route pages. In this case there is only 1 page.

#### Javascript
Well of course, javascript!

##### Shuffle
I used a basic array shuffle function with random choice of array index and temp variable. This shuffle function even has a fancy name called the Fisher-Yates (aka Knuth) Shuffle.

### Link

deployed on github pages @ https://homemadechowder.github.io/clicky_game/