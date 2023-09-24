// Arrays
let stringArr: string[] = ['one', 'hey', 'Nick']
let guitars: (string | number)[] = ["strat", "les paul", 5150]
let mixedData:(string | number | boolean)[] = ['EVH', 1984, true]

    //! Nope
    // stringArr[3] = 42
    // stringArr.push(69)

    // Tuple - fixed length, specific data types for each location in array
    let myTuple: [string, number, boolean] = ["Nick", 42, false]

    let mixed = ["John", 1, true]
    // legal
    mixed = myTuple
    // illegal
    //! myTuple = mixed

// Objects