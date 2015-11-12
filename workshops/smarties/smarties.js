var findSmartiesByColor = function(smarties, color){
    for (var smartyIndex in smarties){
        if (smarties[smartyIndex].color == color){
            smarty = smarties[smartyIndex];
        };
    };
    return smarty
};

var findMostAbundantSmartie = function(smarties){
    var initial_smarties = {color: '', qty: 0}
    for (var i in smarties){
        if (smarties[i].qty > initial_smarties.qty){
            initial_smarties = smarties[i]
        };
    };
    return initial_smarties
};

var findSmartiesLessThan = function(smarties, number){
    smartiesList = []
    for(var i in smarties){
        if (smarties[i].qty < number){
            smartiesList.push(smarties[i].qty)
        };
    };
    return smartiesList
};

// var findSmarties = function(){

// };

var groupSmarties = function(smartyList){
    var smartyGroup = {}
    // for (){
    //   var smarty = smartyList[i]
    //     console.log(i)
    // }

    // return smarty
    for(var i in smartyList){
        var smarty = smartyList[i];
        if(smartyGroup[smarty.color] == undefined){
            smartyGroup[smarty.color] = 0;
        }
        smartyGroup[smarty.color] ++

    }
    return smartyGroup


};

var sortSmarties = function(smarties){
    sortedSmarties = []
    for (var x in smarties){
        var allSmarties = smarties[x]
    }

};

// var addTotalForTeams = function(){

// };
