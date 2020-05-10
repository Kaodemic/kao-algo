const Hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

const HashTable = function () {
  let storage = [];
  const storageLimit = 14;

  this.print = function () {
    console.log(storage);
  };
  this.Add = function (key, value) {
    let index = Hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]]; // for example: [emty,[['Ben','32']], empty]
    } else {
      //   let insert = false;
      //   for (let i = 0; i < storage[index].length; i++) {
      //     if (storage[index][i][0] === key) {
      //       storage[index][i][1] = value;
      //       insert = true;
      //     }
      //   }
      //   if (insert === false) {
      //     storage[index].push([key, value]);
      //   }
      storage[index].push([key, value]);
    }
  };

  this.Lookup = function (key) {
    let index = Hash(key, storageLimit);
    if (storage[index][0][0] === key) {
      return storage[index][0][1];
    }
    return undefined;
  };

  this.Remove = function (key) {
    let index = Hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };
};

let ht = new HashTable();

ht.Add("Ben", 32);
ht.Add("JasonLam", 33);
ht.Add("NguyenThiLuong", 36);
ht.Add("Ben", "Business");
console.log(ht.Lookup("JasonLam"));
ht.Remove("Ben");
ht.Remove("JasonLam");
ht.print();
