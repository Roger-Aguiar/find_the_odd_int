import { FindTheOddInt } from "./find.the.odd.int";

const testFindTheOddInt = new FindTheOddInt();

describe('Tests for FindTheOddInt', () => 
{
    test('Example 1', () => 
    {
        expect(testFindTheOddInt.findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toBe(5);
    });
});