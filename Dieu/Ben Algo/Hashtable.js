// function hashStringToInt(s, tableSize) {
//     let hash = 17;
  
//     for (let i = 0; i < s.length; i++) {
//       hash = (13 * hash * s.charCodeAt(i)) % tableSize;
//     }
  
//     return hash;
//   }
  
//   class HashTable {
//     table = new Array(3);
//     numItems = 0;
  
//     resize = () => {
//       const newTable = new Array(this.table.length * 2);
//       this.table.forEach(item => {
//         if (item) {
//           item.forEach(([key, value]) => {
//             const idx = hashStringToInt(key, newTable.length);
//             if (newTable[idx]) {
//               newTable[idx].push([key, value]);
//             } else {
//               newTable[idx] = [[key, value]];
//             }
//           });
//         }
//       });
//       this.table = newTable;
//     };
  
//     setItem = (key, value) => {
//       this.numItems++;
//       const loadFactor = this.numItems / this.table.length;
//       if (loadFactor > 0.8) {
//         // resize
//         this.resize();
//       }
  
//       const idx = hashStringToInt(key, this.table.length);
//       if (this.table[idx]) {
//         this.table[idx].push([key, value]);
//       } else {
//         this.table[idx] = [[key, value]];
//       }
//     };
  
//     getItem = key => {
//       const idx = hashStringToInt(key, this.table.length);
  
//       if (!this.table[idx]) {
//         return null;
//       }
  
//       // O(n)
//       return this.table[idx].find(x => x[0] === key)[1];
//     };
//   }
  
//   const myTable = new HashTable();
//   myTable.setItem("firstName", "bob");
//   myTable.setItem("lastName", "tim");
//   myTable.setItem("age", 5);
//   myTable.setItem("dob", "1/2/3");
//   console.log(myTable.getItem("firstName"));
//   console.log(myTable.getItem("lastName"));
//   console.log(myTable.getItem("age"));
//   console.log(myTable.getItem("dob"));
  

function hashStringToInt(s, tableSize){
    let hash  = 17;
    for(let i = 0; i < s.length; i++){
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }
    return hash;
}

class hash {
    table = new Array(3);
    NumIncrement = 0;

    resize = () => {
        //create new Array storage
        const newTable = new Array(this.table.length * 2);
        // once the table size is resized, hash number is going to change so we have to reharsh every item in our table
        this.table.forEach(item =>{
            if(item){
                item.forEach(([key,value])=>{
                    // console.log("Key",key,"value",value);
                    // console.log("newTable.length:",newTable.length);
                    const index = hashStringToInt(key, newTable.length);
                    if(newTable[index]){
                        newTable[index].push([key,value]);
                    }else{
                        newTable[index] = [[key,value]];
                    }
                });
            }
        });
        this.table = newTable;
    };

    setItem = (key,value) => {
        this.NumIncrement++;
        const loadDecimal = this.NumIncrement / this.table.length;
        if(loadDecimal > 0.8){
            this.resize();
        }
        const index = hashStringToInt(key,this.table.length);
        if(this.table[index]){
            this.table[index].push([key,value]);
        }else{
            this.table[index] = [[key,value]];
        }
        
    }

    getItem = key => {
        const index = hashStringToInt(key, this.table.length);
        if(!this.table[index]){
            return null;
        }
        return this.table[index].find(x => x[0] === key)[1];
    }
}

const myTable = new hash();
myTable.setItem("firstName", "Ben");
myTable.setItem("lastName", "Lee");
myTable.setItem("age", 32);
myTable.setItem("dob", "1/2/3");
myTable.setItem("Gender","Male");
myTable.setItem("Religion","Buddha")
console.log(myTable.table);
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
console.log(myTable.getItem("age"));
console.log(myTable.getItem("dob"));