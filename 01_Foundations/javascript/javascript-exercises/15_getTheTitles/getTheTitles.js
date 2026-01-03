const getTheTitles = function(arr) {
    // Option 1
    // let finalArr = [];
    // arr.forEach(currentElement => {
    //     finalArr.push(currentElement.title);
    // });

    // return finalArr;

    return arr.map((element) => element.title);
};

// Do not edit below this line
module.exports = getTheTitles;
