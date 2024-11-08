{
    // Define a union type for Circle and Rectangle
    type Circle = {
        shape: "circle";
        radius: number;
    };

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle;

    const calculateShapeArea  = (shape: Shape ): number => {
     if(shape.shape === 'circle'){
        return parseFloat((Math.PI * shape.radius ** 2 ).toFixed(2));
     } 

     else if(shape.shape === 'rectangle'){
        return shape.width * shape.height;
     }

    //  handle unexpacted cases 
    throw new Error("Invalid shape type");
    }

    // example usage
    const circleArea = calculateShapeArea({shape: 'circle', radius: 10});
    console.log(circleArea);

    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 5,
        height: 6
    });

    console.log(rectangleArea);
}