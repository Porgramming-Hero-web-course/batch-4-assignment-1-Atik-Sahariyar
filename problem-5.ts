{
    // 
    const getProperty = <T, k extends  keyof T>(obj: T, key: k): T[k] => {
       return obj[key];
    }

    const persion = { name: "Atik", age: 24};
    console.log(getProperty(persion, "name"));
}