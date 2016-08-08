var dragonApp = angular.module("dragonApp", []);
dragonApp.controller('dragonCtrl', function($scope){    
    $scope.Math = window.Math;
    $scope.heroHealth = "20";
    $scope.dragonHealth = "20";
    $scope.pic = "dragon.png";
    $scope.potionDisabled = false;
    $scope.isDisabled = false;

    $scope.rollDice = function(){
        var random = Math.floor(Math.random() * 6) + 1;
        var random2 = Math.floor(Math.random() * 6) + 1;
        var random3 = Math.floor(Math.random() * 6) + 1;
        var random4 = Math.floor(Math.random() * 6) + 1;
        var die1 = "d" + random + ".gif";
        var die2 = "d" + random2 + ".gif";
        var die3 = "d" + random3 + ".gif";
        var die4 = "d" + random4 + ".gif";
        $scope.playerDice = [die1, die2];
        $scope.dragonDice = [die3, die4];
        $scope.hasrolled = true;
        $scope.heroTotal = random + random2;
        $scope.dragonTotal = random3 + random4;
        if($scope.heroTotal >= 9 && $scope.dragonTotal >= 9) {
            $scope.message = "Congratulations your hit was successful but you also took damage!";
            $scope.heroHealth -= 3;
            $scope.dragonHealth -= 3;
        } else if(9 >= $scope.heroTotal && $scope.dragonTotal >= 9) {
            $scope.message = "so sorry but you're getting toasty!";
            $scope.heroHealth -= 4;
        }else if(9 >= $scope.dragonTotal && $scope.heroTotal >= 9){
            $scope.message = "Congratulations your hit was a SUCCESS!!!!!";
            $scope.dragonHealth -= 4;
        }else if($scope.heroTotal == $scope.dragonTotal){
            $scope.message = "The Dragon was distracted by your shiny armor and no damage was inflicted!";
        }else{
            $scope.message = "You BOTH missed!";
        }
    }

    $scope.specialRoll = function(){
        var random = Math.floor(Math.random() * 6) + 1;
        var random2 = Math.floor(Math.random() * 6) + 1;
        var random3 = Math.floor(Math.random() * 6) + 1;
        var random4 = Math.floor(Math.random() * 6) + 1;
        var die1 = "d" + random + ".gif";
        var die2 = "d" + random2 + ".gif";
        var die3 = "d" + random3 + ".gif";
        var die4 = "d" + random4 + ".gif";
        $scope.playerDice = [die1, die2];
        $scope.dragonDice = [die3, die4];
        $scope.hasrolled = true;
        $scope.heroTotal = random + random2;
        $scope.dragonTotal = random3 + random4;
        if (Number(heroTotal) >= 9) {
            alert("Congratulations your hit was twice as successful!");
            $scope.dragonHealth -= 8;
        }else if(Number(dragonTotal) >= 9) {
            alert("so sorry but you're getting toasty 2x faster!!");
            $scope.heroHealth -= 8;
        }
    }

    $scope.potion = function(){
        $scope.heroHealth += 20;
        if($scope.heroHealth > 20){
            $scope.heroHealth = 20;
        }
        $scope.potionDisabled = true;
    }

    $scope.$watchGroup(["heroHealth", "dragonHealth"], function(newVal, oldVal){
        if(newVal[0] == 0){
            $scope.message = "You have died!!"
            $scope.pic = "deadknight.jpg";
            $scope.isDisabled = true;
        }else if(newVal[1] == 0){
            $scope.pic = "deaddragon.jpg";
            $scope.message = "YOU HAVE SLAYED THE DRAGON!!";
            $scope.isDisabled = true;
        }
    })

    $scope.coward = function(){
        $scope.pic = "coward.jpg";
        $scope.isDisabled = true;

    }

    $scope.tryAgain = function(){
        $route.reload();
    }


});
