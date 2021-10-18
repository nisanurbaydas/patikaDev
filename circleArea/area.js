var r = 1;
const args = process.argv.slice(2);

const calculateArea = (r) => {
    var area = 1;
    area = Math.PI * r * r;
    console.log(area);
}

calculateArea(args[0]*1);