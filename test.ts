
// クラス宣言ができるよ
class TypeScriptTest {

    // 引数と返り値に型をつけることができるよ
    hello(person: string): string {
        return "Hello, " + person;
    }

    helloNum(word: string | number) {
        return "Hello, " + word;
    }

    gene<T>(arg: T): T[] {
        const arr = new Array(1)
        arr.push(arg)
        return arr
    }

    async test(){

    }
    
    async sleep(waitSeconds:number){
        return new Promise(resolve => {
            setTimeout(() => {
          resolve()
        }, waitSeconds * 1000)
        })
    }
}

// クラス宣言ができるよ
class User {
    name: string = ""
    age: number = 0
}

// クラスを継承したクラスを作れるよ
class PazUser extends User {
    rank: number = 859
    firstLeader: "ティラノス" | "プレシオス" | "ブラキオス" = "ブラキオス" // 3択の文字列を設定できたりするよ
}

// const pz = new PazUser()
// console.log(pz)

// インターフェイスを宣言できるよ
interface Monster {
    name: string
    hp: number
    attack: number
    resilience: number
}

// インターフェイスを宣言できるよ
interface Party {
    leader: Monster // 当然自分で作った型も使えるよ
    member: Monster[]
}

// インターフェイスを実装できるよ
class イデアル implements Monster {
    hp: number = 5827
    attack: number = 2625
    resilience: number = 2025
    name: string = "イデアル"
}

class チーム1 implements Party {
    leader: Monster = new イデアル()
    member: Monster[] = [
        new イデアル(),
        new イデアル(),
        new イデアル(),
        new イデアル(),
    ]
}

// 実はクラスも実装できるよ
class PazUser2 implements User {
    name: string = "kuwabara"
    age: number = 108
    rank = 859
    firstLeader: "ティラノス" | "プレシオス" | "ブラキオス" = "ブラキオス" // 3択の文字列を設定できたりするよ
}

// 複数のインターフェイスを実装できるよ、(この例だとあまり意味はないけど)
class MixIn implements チーム1, イデアル {
    leader: Monster = new イデアル()
    member: Monster[] = [
        new イデアル(),
        new イデアル(),
        new イデアル(),
        new イデアル()
    ]
    hp: number = 5827
    attack: number = 2625
    resilience: number = 2025
    name: string = "イデアル"
}

// インスタンス生成時に合成することもできるよ
const mixin: チーム1 & イデアル = {
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
}


// スプレッド演算子を使って既存のインスタンスの合成をすることもできるよ
 const ide = new イデアル()
 const team1_ = new チーム1()
 const mixin2: チーム1 & イデアル = {
    ...ide,
    ...team1_
 }

// User型のインスタンスを作成
const user: User = {
    name: "kuwabara",
    age: 108,
}

const user1 = new User()

// クラスの場合はNewも使える
const pazUser = new PazUser()
const ts = new TypeScriptTest()

console.log(ts.hello(user.name));
console.log(ts.helloNum(pazUser.rank));

const team1 = new チーム1()

console.log(team1.leader.name)
team1.member.forEach(mem => {
    console.log(mem.hp)
})



