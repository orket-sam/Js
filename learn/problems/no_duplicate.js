//  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.


function noDuplicte(nums){
    var numsMap={}
    for(var i=0;i<nums.length;i++){
        if(numsMap[nums[i]]){
            numsMap[nums[i]]+=1;
        }else{
            numsMap[nums[i]]=1
        }
    }
    console.log(numsMap)
}


noDuplicte([1,1,2])