export function formula (X:number[],a:number,b:number){
//y=aX+b

const n = X.length;
let y:number[]=[];
    for (let i = 0; i < n; i++) {
        y[i]=(a*X[i])+b;
      }

    return y;
}