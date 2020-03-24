class Yatzy {
    constructor() {
        this.onesScore = 0;
        this.twosScore = 0;
        this.threesScore = 0;
        this.foursScore = 0;
        this.fivesScore = 0;
        this.sixsScore = 0;
        this.onePairScore = 0;
        this.twoPairScore = 0;
        this.threeKindScore = 0;
        this.fourKindScore = 0;
        this.smallStraightScore = 0;
        this.largeStraightScore = 0;
        this.fullHouseScore = 0;
        this.chanceScore = 0;
        this.yatzyScore = 0;
        this.bonusScore = 0;
        this.sumScore = 0;
        this.totalScore = 0;
    }

    onePair(array) {
        let pair = 0;
        while (array.length > 0) {
            pair = Math.max(...array)
            for (let i = 0; i < array.length; i++) {
                if (array[i] == pair) {
                    array.splice(i, 1)
                    break
                }
            }
            if (array.includes(pair)) {
                return pair * 2;
            }
        }
        return 0;
    }


    twoPair(array) {
        let pair1 = this.onePair(array)
        array.splice(array.indexOf(Math.max(...array)), 1)
        let pair2 = this.onePair(array)
        if (pair1 == pair2) {
            return 0;
        }
        if (pair1 == 0 || pair2 == 0) {
            return 0;
        }
        return pair1 + pair2;
    }

    countOccoursene(number, array) {
        let count = 0;
        for (let terning of array) {
            if (terning == number) {
                count++;
            }
        }
        this.bonus(count * number);
        return count * number;
    }

    threeSame(array) {
        while (true) {
            let count = 0;
            let number = Math.max(...array)
            if (number == 0) {
                return 0;
            }
            for (let i = 0; i < array.length; i++) {
                if (array[i] == number) {
                    array[i] = 0;
                    count++;
                }
            }
            if (count >= 3) {
                return number * 3;
            }
        }
    }



    fourSame(array) {
        while (true) {
            let count = 0;
            let number = Math.max(...array)
            if (number == 0) {
                return 0;
            }
            for (let i = 0; i < array.length; i++) {
                if (array[i] == number) {
                    array[i] = 0;
                    count++;
                }
            }
            if (count >= 4) {
                return number * 4;
            }
        }
    }



    fullHouse(array) {
        let threeSameArray = [...array]
        let threeSame = this.threeSame(threeSameArray);

        for(let i = 0; i<array.length;i++){
            if(array[i] == threeSame/3){
                array[i] = 0;
            }
        }
        let pair = this.onePair(array);
        return threeSame != 0 && pair != 0 ? threeSame + pair : 0;
    }

    smallStraight(array) {
        let smallarray = [1, 2, 3, 4, 5];
        array.sort(function (a, b) {
            return a - b
        });
        for (let i = 0; i < array.length; i++) {
            if (array[i] != smallarray[i]) {
                return 0;
            }
        }
        return 15;
    }

    largeStraight(array) {
        let smallarray = [2, 3, 4, 5, 6];
        array.sort(function (a, b) {
            return a - b
        });
        for (let i = 0; i < array.length; i++) {
            if (array[i] != smallarray[i]) {
                return 0;
            }
        }
        return 20;
    }

    yatzyf(array) {
        for (let i = 0; i < array.length -1; i++) {
            if (array[i] !== array[i+1]) {
                return 0;
            }
        }
        return 50;
    }


    bonus(number) {
    this.sumScore += number;
    if (this.sumScore > 62) {
        this.bonusScore = 50;
        }
    }
    calculateScore(id) {
        let array = [];
        for (let terning of terninger) {
            let string = (terning.src.replace(/\D/g, ''))
            array.push(parseInt(string[string.length - 1]))
        }
        switch (id) {
            case "1sb": {
                this.onesScore = this.countOccoursene(1, array)
                this.totalScore += this.onesScore;
                return this.onesScore
                break
            }
            case "2sb": {
                this.twosScore = this.countOccoursene(2, array)
                this.totalScore += this.twosScore;
                return this.twosScore
                break
            }
            case "3sb": {
                this.threesScore = this.countOccoursene(3, array)
                this.totalScore += this.threesScore
                return this.threesScore
                break
            }
            case "4sb": {
                this.foursScore = this.countOccoursene(4, array)
                this.totalScore += this.foursScore
                return this.foursScore
                break
            }
            case "5sb": {
                this.fivesScore = this.countOccoursene(5, array)
                this.totalScore += this.fivesScore
                return this.fivesScore
                break
            }
            case "6sb": {
                this.sixsScore = this.countOccoursene(6, array)
                this.totalScore += this.sixsScore
                return this.sixsScore
                break
            }
            case "1pb": {
                this.onePairScore = this.onePair(array)
                this.totalScore += this.onePairScore
                return this.onePairScore
                break
            }
            case "2pb": {
                this.twoPairScore = this.twoPair(array)
                this.totalScore += this.twoPairScore
                return this.twoPairScore
                break
            }
            case "3k": {
                this.threeKindScore = this.threeSame(array)
                this.totalScore += this.threeKindScore
                return this.threeKindScore
                break
            }
            case "4k": {
                this.fourKindScore = this.fourSame(array)
                this.totalScore += this.fourKindScore
                return this.fourKindScore
                break
            }
            case "Fhb": {
                this.fullHouseScore = this.fullHouse(array)
                this.totalScore += this.fullHouseScore
                return this.fullHouseScore
                break
            }
            case "Ssb": {
                this.smallStraightScore = this.smallStraight(array)
                this.totalScore += this.smallStraightScore
                return this.smallStraightScore
                break
            }
            case "Lsb": {
                this.largeStraightScore = this.largeStraight(array)
                this.totalScore += this.largeStraightScore
                return this.largeStraightScore
                break
            }
            case "Chb": {
                this.chanceScore = array.reduce((a,b) => a + b, 0)
                this.totalScore += this.chanceScore
                return this.chanceScore
                break
            }
            case "Yab": {
                this.yatzyScore = this.yatzyf(array)
                this.totalScore += this.yatzyScore
                return this.yatzyScore
                break
            }
        }
    }
}
