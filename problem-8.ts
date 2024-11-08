{
  //
  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every((key) => key in obj);
  }
  
  type Persion = {
    name: String;
    age: number;
    email: string;
  }
  // Sample usage
  const person: Persion = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"])); // Output: true
  console.log(validateKeys(person, ["name", "address" as keyof typeof person])); // Output: false
  
}
