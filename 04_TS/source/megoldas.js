function PhErtek(vizsgaltErtek) {
    if (vizsgaltErtek > 7)
        return "lugos";
    else if (vizsgaltErtek === 7)
        return "semleges";
    else
        return "savas";
}
function isPrime(num) {
    if (isNaN(num) || num % 1 !== 0) {
        return false;
    }
    num = Math.abs(num);
    if (num === 0 || num === 1) {
        return false;
    }
    var maxFactorNum = Math.sqrt(num);
    for (var i = 2; i <= maxFactorNum; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function PrimekSzama(vizsgaltTomb) {
    var primekszama = 0;
    for (var szam in vizsgaltTomb) {
        if (isPrime(parseInt(szam))) {
            primekszama++;
        }
    }
    return primekszama;
}
function isMaganhangzo(char) {
    if (char.length == 1) {
        var vowels = new Array("a", "e", "i", "o", "u");
        var isVowel = false;
        for (var e in vowels) {
            if (vowels[e] == char) {
                isVowel = true;
            }
        }
        return isVowel;
    }
}
function MaganHangzokSzama(vizsgaltSzoveg) {
    var maganhanzok = 0;
    for (var betu in vizsgaltSzoveg.split("")) {
        if (isMaganhangzo(betu)) {
            maganhanzok++;
        }
    }
    return maganhanzok;
}
