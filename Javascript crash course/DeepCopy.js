const o = {
    a: {
        key: 'key'
    },
    b: 'b',
    obj: {
        key: 'key',
    },
}

var res = {
    a: {
        key: "b"
    },
    b: "2"
}

function deepCopy(obj){
    // check if vals are objects
    // if so. Copy that object (deep copy)
    // else return the value

    const keys = Object.keys(obj); //we now hav an array full of the string values of that object
    console.log(keys)
    const newObject ={} // Define new object we will return
    for(var i = 0; i < keys.length; i++){
        // loop through object
        const key = keys[i]
        console.log("object details", typeof(key))
        if(typeof obj[key] === 'object'){
            console.log("test case 1")
            newObject[key] = deepCopy(obj[key])
        } else {
            console.log("test case 2")
            newObject[key] = obj[key]
        }
    }

    return newObject;
}

const o3 = deepCopy(res)

o.obj.key = 'new key!'
//console.log(o)
console.log(o3.b)

// var res = {a: {key: "b"}}
// console.log("object details", typeof (res))