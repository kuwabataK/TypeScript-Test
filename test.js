"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// クラス宣言ができるよ
class TypeScriptTest {
    // 引数と返り値に型をつけることができるよ
    hello(person) {
        return "Hello, " + person;
    }
    helloNum(word) {
        return "Hello, " + word;
    }
    gene(arg) {
        const arr = new Array(1);
        arr.push(arg);
        return arr;
    }
    test() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    sleep(waitSeconds) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, waitSeconds * 1000);
            });
        });
    }
}
// クラス宣言ができるよ
class User {
    constructor() {
        this.name = "";
        this.age = 0;
    }
}
// クラスを継承したクラスを作れるよ
class PazUser extends User {
    constructor() {
        super(...arguments);
        this.rank = 859;
        this.firstLeader = "ブラキオス"; // 3択の文字列を設定できたりするよ
    }
}
// インターフェイスを実装できるよ
class イデアル {
    constructor() {
        this.hp = 5827;
        this.attack = 2625;
        this.resilience = 2025;
        this.name = "イデアル";
    }
}
class チーム1 {
    constructor() {
        this.leader = new イデアル();
        this.member = [
            new イデアル(),
            new イデアル(),
            new イデアル(),
            new イデアル(),
        ];
    }
}
// 実はクラスも実装できるよ
class PazUser2 {
    constructor() {
        this.name = "kuwabara";
        this.age = 108;
        this.rank = 859;
        this.firstLeader = "ブラキオス"; // 3択の文字列を設定できたりするよ
    }
}
// 複数のインターフェイスを実装できるよ、(この例だとあまり意味はないけど)
class MixIn {
    constructor() {
        this.leader = new イデアル();
        this.member = [
            new イデアル(),
            new イデアル(),
            new イデアル(),
            new イデアル()
        ];
        this.hp = 5827;
        this.attack = 2625;
        this.resilience = 2025;
        this.name = "イデアル";
    }
}
// インスタンス生成時に合成することもできるよ
const mixin = {
    leader: new イデアル(),
    member: [
        new イデアル(),
        new イデアル(),
        new イデアル(),
        new イデアル()
    ],
    hp: 5827,
    attack: 2625,
    resilience: 2025,
    name: "イデアル"
};
// User型のインスタンスを作成
const user = {
    name: "kuwabara",
    age: 108,
};
const user1 = new User();
// クラスの場合はNewも使える
const pazUser = new PazUser();
const ts = new TypeScriptTest();
console.log(ts.hello(user.name));
console.log(ts.helloNum(pazUser.rank));
const team1 = new チーム1();
console.log(team1.leader.name);
team1.member.forEach(mem => {
    console.log(mem.hp);
});
