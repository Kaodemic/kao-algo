var mergeAlternately = function(word1, word2) {
var a = word1.split('');
var b = word2.split('');

var zoneA=[];
var zoneB=[];

for (const i in a) {
    
  zoneA.push({index:i, value:a[i]})
}

for (const i in b) {
    zoneB.push({index:i, value:b[i]})
  }



zoneA.forEach(item=>{
    item.index=Number(item.index)*2
})

zoneB.forEach((item,index)=>{
    item.index=Number(item.index)+index+1
})


let zoneC = zoneA.concat(zoneB)
zoneC.sort((a, b) => a.index - b.index);


let R=''
for (const item in zoneC) {
    R=R+zoneC[item].value;
}

return R

};

console.log(mergeAlternately('abcd','efg'))