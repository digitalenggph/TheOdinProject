// SOLUTION # 1

// const removeFromArray = function(array, ...toRemove) {
//     let arrayLen = array.length;
//     let toRemoveLen = toRemove.length;
//     let returnArray = [];

//     for (let i=0; i < arrayLen; i++) {
//         let shouldRemove = false;

//         for (let r=0; r < toRemoveLen; r++) {
//             if (array.at(i) === toRemove.at(r)) {
//                 shouldRemove = true;
//                 break;
//             }
//         }

//         if (shouldRemove == false) {
//             returnArray.push(array[i])
//         }
//     }

//     return returnArray

// };

const removeFromArray = function(array, ...toRemove) {
    let returnArray = [];

    array.forEach(element => {
        
        if (!toRemove.includes(element)) {
            returnArray.push(element);
        }
    });

    return returnArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
