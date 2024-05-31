function PhErtek(vizsgaltErtek: number): String {
    if (vizsgaltErtek > 7) return "lugos";
    else if (vizsgaltErtek === 7) return "semleges";
    else return "savas";
}

function isPrime(num: number): boolean{
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
function PrimekSzama(vizsgaltTomb: number[]): number {
    let primekszama: number = 0;
    for (let szam in vizsgaltTomb) {
        if (isPrime(parseInt(szam))) {
            primekszama++;
        }
    }
    return primekszama;
}

function isMaganhangzo(char): boolean {
    if (char.length == 1) {
        var vowels = new Array("a", "e", "i", "o", "u");
        var isVowel = false;

        for (let e in vowels) {
            if (vowels[e] == char) {
                isVowel = true;
            }
        }

        return isVowel;
    }
}

function MaganHangzokSzama(vizsgaltSzoveg: String): number {
    let maganhanzok: number = 0;
    for (let betu in vizsgaltSzoveg.split("")) {
        if (isMaganhangzo(betu)) {
            maganhanzok++;
        }
    }
    return maganhanzok;
}