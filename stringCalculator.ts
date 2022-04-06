export default function Add(numbers: string): number{
    let nums: string[];
    let sum = 0;
    let regex : RegExp = /,|\n/;
    let sep : string = ',';

    if(numbers.length > 0 && !numbers.charAt(numbers.length-1).match(/[0-9]/)) {
        throw new Error('not allow a separator at the end');
    }

    if(numbers.slice(0,2) == "//") {
        let tmp = numbers.split('\n');
        sep = tmp[0].slice(2,tmp[0].length);
        console.log("sep: ", sep)
        regex = new RegExp(`${sep}|\n`)
        if (sep == "|") {
            regex = new RegExp(`[|\n]`)
        }
        nums = numbers.split(regex).splice(1);
    } else {
        nums = numbers.split(regex);
    }

    for (let i = 0;i < nums.length;i++) {
        if (nums[i].length > 1) {
            for(let j = 0;j < nums[i].length;j++) {
                if(!nums[i].charAt(j).match(/[0-9]/)){
                    let c: string = nums[i].charAt(j)
                    let n_pos = numbers.indexOf('\n');
                    console.log("n_pos", n_pos);
                    console.log("char is ", c);
                    console.log("pos: ",numbers.indexOf(c, n_pos))
                    let pos: number = numbers.indexOf(c, n_pos) - n_pos -1;
                    throw new Error(`"${sep}" expected but "${c}" found at postition ${pos}.`);
                }
            }
        }
        sum += Number(nums[i]);
    }


    return sum;
}