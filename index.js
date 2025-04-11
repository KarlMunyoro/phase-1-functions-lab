function distanceFromHqInBlocks(address){
    const blocks=parseInt(address, 10)
    const hq = 42;
    return Math.abs(blocks-hq);
}

console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(feet){
    let value = distanceFromHqInBlocks(feet)
    return value * 264
}

console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(firstBlock, lastBlock){
    const start=parseInt(firstBlock);
    const last=parseInt(lastBlock);
    const dist = last-start;
    const feet = Math.abs(dist)*264;
    return feet;
}

console.log(distanceTravelledInFeet(34, 44));

function calculatesFarePrice(beginning, end){
    const b = parseInt(beginning);
    const e = parseInt(end);
    const d = Math.abs(e-b);
    const x = d * 264;
    let fare;
    if(x<=400){
        fare=0;
    }
    else if(x>400 && x<=2000){
        fare = 0.02 * (x-400);
    }
    else if(x>400 && x<=2500){
        fare = 25;
    }
    else if(x>2500){
        fare='cannot travel that far';
    }
    else{
        console.log("enter a real address")
    }
    return fare;
}

console.log(calculatesFarePrice(43,44))

