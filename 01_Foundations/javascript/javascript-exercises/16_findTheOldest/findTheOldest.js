const findTheOldest = function(objectArray) {
    objectArray.forEach(element => {
        if (element.yearOfDeath == undefined) {
            element.yearOfDeath = new Date().getFullYear();
        }});
        
    objectArray.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth))
    return objectArray.pop()
};


// Do not edit below this line
module.exports = findTheOldest;
