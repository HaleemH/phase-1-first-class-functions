function receivesAFunction(arg){
    return arg();
}

function returnsANamedFunction(){
    return function newFunc(){
        console.log('hi')
    };
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log('hi')
    }
}