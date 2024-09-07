function x(){
    const a = 10;
    return function y(){
        return a * 10;
    }
}

const val = x();
console.log(val())