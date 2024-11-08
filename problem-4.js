{
    var calculateShapeArea = function (shape) {
        if (shape.shape === 'circle') {
            return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
        }
        else if (shape.shape === 'rectangle') {
            return shape.width * shape.height;
        }
        //  handle unexpacted cases 
        throw new Error("Invalid shape type");
    };
    // example usage
    var circleArea = calculateShapeArea({ shape: 'circle', radius: 10 });
    console.log(circleArea);
    var rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 5,
        height: 6
    });
    console.log(rectangleArea);
}
