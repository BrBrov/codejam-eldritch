
class Ancients {
    constructor() {
        this.ancientsData = [
            {
                id: 'azathoth',
                name: 'azathoth',
                firstStage: {
                    greenCards: 1,
                    blueCards: 1,
                    brownCards: 2,
                },
                secondStage: {
                    greenCards: 2,
                    blueCards: 1,
                    brownCards: 3,
                },
                thirdStage: {
                    greenCards: 2,
                    blueCards: 0,
                    brownCards: 4,
                },
            },
            {
                id: 'cthulhu',
                name: 'cthulhu',
                firstStage: {
                    greenCards: 0,
                    blueCards: 2,
                    brownCards: 2,
                },
                secondStage: {
                    greenCards: 1,
                    blueCards: 0,
                    brownCards: 3,
                },
                thirdStage: {
                    greenCards: 3,
                    blueCards: 0,
                    brownCards: 4,
                },
            },
            {
                id: 'iogSothoth',
                name: 'iogsothoth',
                firstStage: {
                    greenCards: 0,
                    blueCards: 1,
                    brownCards: 2,
                },
                secondStage: {
                    greenCards: 2,
                    blueCards: 1,
                    brownCards: 3,
                },
                thirdStage: {
                    greenCards: 3,
                    blueCards: 0,
                    brownCards: 4,
                },
            },
            {
                id: 'shubNiggurath',
                name: 'shubniggurath',
                firstStage: {
                    greenCards: 1,
                    blueCards: 1,
                    brownCards: 2,
                },
                secondStage: {
                    greenCards: 3,
                    blueCards: 1,
                    brownCards: 2,
                },
                thirdStage: {
                    greenCards: 2,
                    blueCards: 0,
                    brownCards: 4,
                },
            },
        ]
        this.ancients = document.querySelector('.ancients');
        this.countAncients = null;
        this.ancientsArr = [];
        this.ancientsArr.push(document.querySelector('.azathoth'));
        this.ancientsArr.push(document.querySelector('.cthulhu'));
        this.ancientsArr.push(document.querySelector('.iogsothoth'));
        this.ancientsArr.push(document.querySelector('.shubniggurath'));
        this.ancients.addEventListener('click', clkEvent => this.#setScheme(clkEvent));
    }
    #setScheme(e) {
        switch (e.target.className) {
            case 'azathoth':
                this.countAncients = 0;
                break;
            case 'cthulhu':
                this.countAncients = 1;
                break;
            case 'iogsothoth':
                this.countAncients = 2;
                break;
            case 'shubniggurath':
                this.countAncients = 3;
                break;
        }
        this.#setStyleAncientsElem();
        let save = this.ancientsData[this.countAncients];
        this.schemeArr = [];
        this.schemeArr.push(save.firstStage);
        this.schemeArr.push(save.secondStage);
        this.schemeArr.push(save.thirdStage);
    }
    getChange() {
        return this.schemeArr;
    }
    #setStyleAncientsElem() {
        this.ancientsArr.forEach((elem, index) => {
            if (index === this.countAncients) {
                elem.className = this.ancientsData[index].name + ' ancients-changed';
            } else {
                elem.className = this.ancientsData[index].name;
            }
        })
    }
}

class Level {
    constructor() {
        this.difficulties = [
            {
                id: 'very-easy'
            },
            {
                id: 'easy'
            },
            {
                id: 'normal'
            },
            {
                id: 'hard'
            },
            {
                id: 'very-hard'
            }
        ]
        this.lvlCount = null;
        this.elemLvl = document.querySelectorAll('.level-item');
        this.lvlList = document.querySelector('.level-list');
        this.lvlList.addEventListener('click', event => this.#setLvl(event))
    }
    #setLvl(e) {
        this.difficulties.forEach((el, index) => {
            if (e.target.id === el.id) {
                this.lvlCount = index;
            }
        })
        this.elemLvl.forEach((elem, index) => {
            if (index === this.lvlCount) {
                elem.className = 'level-item' + ' level-changed';
            } else {
                elem.className = 'level-item';
            }
        })
    }
    getLvl() {
        return this.lvlCount;
    }
}

class Deck {
    constructor() {
        this.cardsBlue = [
            {
                id: 'blue1',
                cardFace: './assets/MythicCards/blue/blue1.png',
                difficulty: 'hard',
                color: 'blue'
            },
            {
                id: 'blue2',
                cardFace: './assets/MythicCards/blue/blue.2png',
                difficulty: 'hard',
                color: 'blue'
            },
            {
                id: 'blue3',
                cardFace: './assets/MythicCards/blue/blue3.png',
                difficulty: 'easy',
                color: 'blue'
            },
            {
                id: 'blue4',
                cardFace: './assets/MythicCards/blue/blue4.png',
                difficulty: 'easy',
                color: 'blue'
            },
            {
                id: 'blue5',
                cardFace: './assets/MythicCards/blue/blue5.png',
                difficulty: 'easy',
                color: 'blue'
            },
            {
                id: 'blue6',
                cardFace: './assets/MythicCards/blue/blue6.png',
                difficulty: 'hard',
                color: 'blue'
            },
            {
                id: 'blue7',
                cardFace: './assets/MythicCards/blue/blue7.png',
                difficulty: 'normal',
                color: 'blue'
            },
            {
                id: 'blue8',
                cardFace: './assets/MythicCards/blue/blue8.png',
                difficulty: 'hard',
                color: 'blue'
            },
            {
                id: 'blue9',
                cardFace: './assets/MythicCards/blue/blue9.png',
                difficulty: 'normal',
                color: 'blue'
            },
            {
                id: 'blue10',
                cardFace: './assets/MythicCards/blue/blue10.png',
                difficulty: 'easy',
                color: 'blue'
            },
            {
                id: 'blue11',
                cardFace: './assets/MythicCards/blue/blue11.png',
                difficulty: 'normal',
                color: 'blue'
            },
            {
                id: 'blue12',
                cardFace: './assets/MythicCards/blue/blue12.png',
                difficulty: 'normal',
                color: 'blue'
            },
        ]
        this.cardsBrown = [
            {
                id: 'brown1',
                cardFace: './assets/MythicCards/brown/brown1.png',
                difficulty: 'normal',
                color: 'brown'
            },
            {
                id: 'brown2',
                cardFace: './assets/MythicCards/brown/brown2.png',
                difficulty: 'normal',
                color: 'brown'
            },
            {
                id: 'brown3',
                cardFace: './assets/MythicCards/brown/brown3.png',
                difficulty: 'normal',
                color: 'brown'
            },
            {
                id: 'brown4',
                cardFace: './assets/MythicCards/brown/brown4.png',
                difficulty: 'normal',
                color: 'brown'
            },
            {
                id: 'brown5',
                cardFace: './assets/MythicCards/brown/brown5.png',
                difficulty: 'normal',
                color: 'brown'
            },
            {
                id: 'brown6',
                cardFace: './assets/MythicCards/brown/brown6.png',
                difficulty: 'hard',
                color: 'brown'
            },
            {
                id: 'brown7',
                cardFace: './assets/MythicCards/brown/brown7.png',
                difficulty: 'hard',
                color: 'brown'
            },
            {
                id: 'brown8',
                cardFace: './assets/MythicCards/brown/brown8.png',
                difficulty: 'hard',
                color: 'brown'
            },
            {
                id: 'brown9',
                cardFace: './assets/MythicCards/brown/brown9.png',
                difficulty: 'hard',
                color: 'brown'
            },
            {
                id: 'brown10',
                cardFace: './assets/MythicCards/brown/brown10.png',
                difficulty: 'hard',
                color: 'brown'
            },
            {
                id: 'brown11',
                cardFace: './assets/MythicCards/brown/brown11.png',
                difficulty: 'easy',
                color: 'brown'
            },
            {
                id: 'brown12',
                cardFace: './assets/MythicCards/brown/brown12.png',
                difficulty: 'easy',
                color: 'brown'
            },
            {
                id: 'brown13',
                cardFace: './assets/MythicCards/brown/brown13.png',
                difficulty: 'easy',
                color: 'brown'
            },
            {
                id: 'brown14',
                cardFace: './assets/MythicCards/brown/brown14.png',
                difficulty: 'easy',
                color: 'brown'
            },
            {
                id: 'brown15',
                cardFace: './assets/MythicCards/brown/brown15.png',
                difficulty: 'normal',
                color: 'brown'
            },
            {
                id: 'brown16',
                cardFace: './assets/MythicCards/brown/brown16.png',
                difficulty: 'normal',
                color: 'brown'
            },
            {
                id: 'brown17',
                cardFace: './assets/MythicCards/brown/brown17.png',
                difficulty: 'normal',
                color: 'brown'
            },
            {
                id: 'brown18',
                cardFace: './assets/MythicCards/brown/brown18.png',
                difficulty: 'normal',
                color: 'brown'
            },
            {
                id: 'brown19',
                cardFace: './assets/MythicCards/brown/brown19.png',
                difficulty: 'normal',
                color: 'brown'
            },
            {
                id: 'brown20',
                cardFace: './assets/MythicCards/brown/brown20.png',
                difficulty: 'normal',
                color: 'brown'
            },
            {
                id: 'brown21',
                cardFace: './assets/MythicCards/brown/brown21.png',
                difficulty: 'easy',
                color: 'brown'
            },
        ]
        this.cardsGreen = [
            {
                id: 'green1',
                cardFace: './assets/MythicCards/green/green1.png',
                difficulty: 'easy',
                color: 'green'
            },
            {
                id: 'green2',
                cardFace: './assets/MythicCards/green/green2.png',
                difficulty: 'hard',
                color: 'green'
            },
            {
                id: 'green3',
                cardFace: './assets/MythicCards/green/green3.png',
                difficulty: 'hard',
                color: 'green'
            },
            {
                id: 'green4',
                cardFace: './assets/MythicCards/green/green4.png',
                difficulty: 'hard',
                color: 'green'
            },
            {
                id: 'green5',
                cardFace: './assets/MythicCards/green/green5.png',
                difficulty: 'hard',
                color: 'green'
            },
            {
                id: 'green6',
                cardFace: './assets/MythicCards/green/green6.png',
                difficulty: 'hard',
                color: 'green'
            },
            {
                id: 'green7',
                cardFace: './assets/MythicCards/green/green7.png',
                difficulty: 'normal',
                color: 'green'
            },
            {
                id: 'green8',
                cardFace: './assets/MythicCards/green/green8.png',
                difficulty: 'normal',
                color: 'green'
            },
            {
                id: 'green9',
                cardFace: './assets/MythicCards/green/green9.png',
                difficulty: 'normal',
                color: 'green'
            },
            {
                id: 'green10',
                cardFace: './assets/MythicCards/green/green10.png',
                difficulty: 'normal',
                color: 'green'
            },
            {
                id: 'green11',
                cardFace: './assets/MythicCards/green/green11.png',
                difficulty: 'normal',
                color: 'green'
            },
            {
                id: 'green12',
                cardFace: './assets/MythicCards/green/green12.png',
                difficulty: 'easy',
                color: 'green'
            },
            {
                id: 'green13',
                cardFace: './assets/MythicCards/green/green13.png',
                difficulty: 'normal',
                color: 'green'
            },
            {
                id: 'green14',
                cardFace: './assets/MythicCards/green/green14.png',
                difficulty: 'normal',
                color: 'green'
            },
            {
                id: 'green15',
                cardFace: './assets/MythicCards/green/green15.png',
                difficulty: 'normal',
                color: 'green'
            },
            {
                id: 'green16',
                cardFace: './assets/MythicCards/green/green16.png',
                difficulty: 'easy',
                color: 'green'
            },
            {
                id: 'green17',
                cardFace: './assets/MythicCards/green/green17.png',
                difficulty: 'easy',
                color: 'green'
            },
            {
                id: 'green18',
                cardFace: './assets/MythicCards/green/green18.png',
                difficulty: 'easy',
                color: 'green'
            },
        ]
        this.cardsArr={
            1:[],
            2:[],
            3:[],
            4:[],
            5:[],
            6:[],
            7:[],
            8:[],
            9:[]
        };
        let stageArr = [];
        stageArr.push(document.querySelectorAll('.green'));
        stageArr.push(document.querySelectorAll('.brown'));
        stageArr.push(document.querySelectorAll('.blue'));
        this.deck = {
            1: stageArr[0][0],
            2: stageArr[1][0],
            3: stageArr[2][0],
            4: stageArr[0][1],
            5: stageArr[1][1],
            6: stageArr[2][1],
            7: stageArr[0][2],
            8: stageArr[1][2],
            9: stageArr[2][2]
        };
        this.card = document.querySelector('.right');
        this.clickDeck = document.querySelector('.left-deck');
        this.err = document.querySelector('.error');
    }
    setScheme(scheme, lvl) {
        let sortedCard = {
            greenCards: {},
            brownCards: {},
            blueCards: {}
        };
        if (scheme === undefined) {
            this.err.textContent = 'Выберите Древнего!';
        } else if (lvl === null) {
            this.err.textContent = 'Выберите сложность!';
        } else {
            this.err.textContent = '';
        }
        switch (lvl) {
            case 0:
            case 1:
            sortedCard.greenCards.easy = this.cardsGreen.filter(e=>{
                if(e.difficulty === 'easy'){
                    return e;
                }
            })
            sortedCard.greenCards.normal = this.cardsGreen.filter(e=>{
                if(e.difficulty === 'normal'){
                    return e;
                }
            })
            sortedCard.brownCards.easy = this.cardsBrown.filter(e=>{
                if(e.difficulty === 'easy'){
                    return e;
                }
            })
            sortedCard.brownCards.normal = this.cardsBrown.filter(e=>{
                if(e.difficulty === 'normal'){
                    return e;
                }
            })
            sortedCard.blueCards.easy = this.cardsBlue.filter(e=>{
                if(e.difficulty === 'easy'){
                    return e;
                }
            })
            sortedCard.blueCards.normal = this.cardsBlue.filter(e=>{
                if(e.difficulty === 'normal'){
                    return e;
                }
            })
                break;
            case 2:
                sortedCard.greenCards = this.cardsGreen;
                sortedCard.brownCards = this.cardsBrown;
                sortedCard.blueCards = this.cardsBlue;
                break;
            case 3:
            case 4:
            sortedCard.greenCards.hard = this.cardsGreen.filter(e=>{
                if(e.difficulty === 'hard'){
                    return e;
                }
            })
            sortedCard.greenCards.normal = this.cardsGreen.filter(e=>{
                if(e.difficulty === 'normal'){
                    return e;
                }
            })
            sortedCard.brownCards.hard = this.cardsBrown.filter(e=>{
                if(e.difficulty === 'hard'){
                    return e;
                }
            })
            sortedCard.brownCards.normal = this.cardsBrown.filter(e=>{
                if(e.difficulty === 'normal'){
                    return e;
                }
            })
            sortedCard.blueCards.hard = this.cardsBlue.filter(e=>{
                if(e.difficulty === 'hard'){
                    return e;
                }
            })
            sortedCard.blueCards.normal = this.cardsBlue.filter(e=>{
                if(e.difficulty === 'normal'){
                    return e;
                }
            })
                break;
        }
        console.log(sortedCard);
        console.log(scheme);
        let controlCards = {
            greenCards:[],
            brownCards:[],
            blueCards:[]
        }

    }
    #mathScheme(scheme) {
        let sumBlue = 0;
        let sumGreen = 0;
        let sumBrown = 0;
        for (const key in scheme) {
            for (const i in scheme[key]) {
                if (i == 'greenCards') {
                    sumGreen = sumGreen + scheme[key][i];
                } else if (i == 'blueCards') {
                    sumBlue = sumBlue + scheme[key][i];
                } else {
                    sumBrown = sumBrown + scheme[key][i];
                }
            }
        }
        return {
            green: sumGreen,
            brown: sumBrown,
            blue: sumBlue
        }
    }
    #random(length) {
        return Math.floor(Math.random() * length);
    }
}



document.addEventListener('DOMContentLoaded', async () => {
    let ancients = new Ancients();
    let lvl = new Level();
    let deck = new Deck();

    // let eventClick = new CustomEvent('takeCard');
    let body = document.getElementsByTagName('body')[0];
    body.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        deck.setScheme(ancients.getChange(), lvl.getLvl());
        console.log(deck.cardsArr);
    });

})

// ============================================>


const cardsBlue = [
    {
        id: 'blue1',
        cardFace: './assets/MythicCards/blue/blue1.png',
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue2',
        cardFace: './assets/MythicCards/blue/blue.2png',
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue3',
        cardFace: './assets/MythicCards/blue/blue3.png',
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue4',
        cardFace: './assets/MythicCards/blue/blue4.png',
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue5',
        cardFace: './assets/MythicCards/blue/blue5.png',
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue6',
        cardFace: './assets/MythicCards/blue/blue6.png',
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue7',
        cardFace: './assets/MythicCards/blue/blue7.png',
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue8',
        cardFace: './assets/MythicCards/blue/blue8.png',
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue9',
        cardFace: './assets/MythicCards/blue/blue9.png',
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue10',
        cardFace: './assets/MythicCards/blue/blue10.png',
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue11',
        cardFace: './assets/MythicCards/blue/blue11.png',
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue12',
        cardFace: './assets/MythicCards/blue/blue12.png',
        difficulty: 'normal',
        color: 'blue'
    },
]

const cardsBrown = [
    {
        id: 'brown1',
        cardFace: './assets/MythicCards/brown/brown1.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown2',
        cardFace: './assets/MythicCards/brown/brown2.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown3',
        cardFace: './assets/MythicCards/brown/brown3.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown4',
        cardFace: './assets/MythicCards/brown/brown4.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown5',
        cardFace: './assets/MythicCards/brown/brown5.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown6',
        cardFace: './assets/MythicCards/brown/brown6.png',
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown7',
        cardFace: './assets/MythicCards/brown/brown7.png',
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown8',
        cardFace: './assets/MythicCards/brown/brown8.png',
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown9',
        cardFace: './assets/MythicCards/brown/brown9.png',
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown10',
        cardFace: './assets/MythicCards/brown/brown10.png',
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown11',
        cardFace: './assets/MythicCards/brown/brown11.png',
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown12',
        cardFace: './assets/MythicCards/brown/brown12.png',
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown13',
        cardFace: './assets/MythicCards/brown/brown13.png',
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown14',
        cardFace: './assets/MythicCards/brown/brown14.png',
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown15',
        cardFace: './assets/MythicCards/brown/brown15.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown16',
        cardFace: './assets/MythicCards/brown/brown16.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown17',
        cardFace: './assets/MythicCards/brown/brown17.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown18',
        cardFace: './assets/MythicCards/brown/brown18.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown19',
        cardFace: './assets/MythicCards/brown/brown19.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown20',
        cardFace: './assets/MythicCards/brown/brown20.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown21',
        cardFace: './assets/MythicCards/brown/brown21.png',
        difficulty: 'easy',
        color: 'brown'
    },
]

const cardsGreen = [
    {
        id: 'green1',
        cardFace: './assets/MythicCards/green/green1.png',
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green2',
        cardFace: './assets/MythicCards/green/green2.png',
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green3',
        cardFace: './assets/MythicCards/green/green3.png',
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green4',
        cardFace: './assets/MythicCards/green/green4.png',
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green5',
        cardFace: './assets/MythicCards/green/green5.png',
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green6',
        cardFace: './assets/MythicCards/green/green6.png',
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green7',
        cardFace: './assets/MythicCards/green/green7.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green8',
        cardFace: './assets/MythicCards/green/green8.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green9',
        cardFace: './assets/MythicCards/green/green9.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green10',
        cardFace: './assets/MythicCards/green/green10.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green11',
        cardFace: './assets/MythicCards/green/green11.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green12',
        cardFace: './assets/MythicCards/green/green12.png',
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green13',
        cardFace: './assets/MythicCards/green/green13.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green14',
        cardFace: './assets/MythicCards/green/green14.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green15',
        cardFace: './assets/MythicCards/green/green15.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green16',
        cardFace: './assets/MythicCards/green/green16.png',
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green17',
        cardFace: './assets/MythicCards/green/green17.png',
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green18',
        cardFace: './assets/MythicCards/green/green18.png',
        difficulty: 'easy',
        color: 'green'
    },
]