export class FindTheOddInt
{
    findOdd (xs: number[]): number 
    {
        let frequencyNumber = 0;
        let oddNumber = 0;

        xs.sort();
        const distinct_xs = [...new Set(xs)];   
        
        for (let i = 0; i < distinct_xs.length; i++) 
        {
            for(let j = 0; j < xs.length; j++ )
            {
                if(xs[j] == distinct_xs[i])
                {
                    frequencyNumber++;
                }
            }   
            if(frequencyNumber % 2 != 0)
            {
                oddNumber = distinct_xs[i];
                break;
            }      
            frequencyNumber = 0;   
        }
        
        return oddNumber;
    }
}

const integerNumbers = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
let testClass = new FindTheOddInt();

let oddNumber = testClass.findOdd(integerNumbers);
console.log(oddNumber);