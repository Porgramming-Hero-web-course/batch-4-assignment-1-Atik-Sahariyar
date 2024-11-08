{
    //
    function validateKeys(obj, keys) {
        return keys.every(function (key) { return key in obj; });
    }
    // Sample usage
    var person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"])); // Output: true
    console.log(validateKeys(person, ["name", "address"])); // Output: false
}
