import { reactive } from "vue"

export const gameScript = reactive({
    stateList: ["Click to Start", "Click it!!", "Disabled"],
    currState: "",
    resMSG: "",
    clickCount: 0,
    cpsCount: 0,
    timre: 10,

    urName: "",
    prevCPS: 0,
    bestCPS: 0,
    playerList: [],

    setDefault() {
        if(document.getElementById("game-btn") != null) document.getElementById("game-btn").disabled = false
        this.currState = this.stateList[0]
        this.clickCount = 0
        this.timre = 10

        this.prevCPS = this.bestCPS
    },
    setDisabled() {
        document.getElementById("game-btn").disabled = true
        this.currState = this.stateList[2]
        this.cpsCount = this.clickCount / 10
        this.resultMsg()
    },
    countDown() {
        if(this.timre > 0) {
            setTimeout(() => {
                this.timre --
                this.countDown()
            }, 1000)
        } else if(this.timre == 0) this.setDisabled()
    },
    clickCounter() {
        if(this.clickCount == 0) {
            this.currState = this.stateList[1]
            this.countDown()
        }
        this.clickCount ++
    },
    resultMsg() {
        if(this.cpsCount > this.bestCPS) {
            this.resMSG = "New High Score! your current CPS is higher than your previous! (" + this.prevCPS + " CPS)"
            this.bestCPS = this.cpsCount
        }
        else {
            this.resMSG = "Sadly, your previous CPS is still your highest.. (" + this.prevCPS + " CPS)"
        }
    }
})