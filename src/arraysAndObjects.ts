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
    // legal, because an array is an object in JS
    let myObj: object
    myObj = []

    let exampleObj = {
        prop1: "Nick",
        prop2: true
    }

    // cannot reassign obj props after initial type declaration. Once declared, it's locked in to initial type.
    //! illegal
    // exampleObj = {
    //     prop1: "Nicholas",
    //     prop2: 42
    // }

    // Defining custom type
    type Guitarist = {
        name: string,
        active?: boolean,
        albums: (string | number)[],
    }

    // Creating an instance of custom type
    let eddieVh: Guitarist = {
        name: "Eddie",
        active: false,
        albums: [1984, 5150, 'OU812']
    }

    let jimmyP: Guitarist = {
        name: "Jimmy",
        active: true,
        albums: ['I', 'II', 'IV']
    }
    // This is valid because they both have the same 3 properties and data types for each property.
    eddieVh = jimmyP

    // Optional properties
    //! line 39 - Question mark after property denotes that it can either be boolean or undefined (optional)

    const greetGuitarist = (guitarist: Guitarist) => {
        if (guitarist) {
            return `Hello ${guitarist.name}!`
        }
        return 'Hello!'
    }
    console.log(greetGuitarist(jimmyP))



    // Enums

    enum Grade {
        U = 1,
        D,
        C,
        B,
        A
    }
    console.log(Grade.U)