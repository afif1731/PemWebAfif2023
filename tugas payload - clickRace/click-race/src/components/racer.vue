<template>
    <body>
        <div class=" align-content-center m-5 text-center ">
            Hallo
            <div class=" m-5 d-grid gap-2 col-6 mx-auto ">
                <button type="button" id="game-btn" class=" btn btn-primary btn-lg" @click="gameScript.clickCounter()">{{ gameScript.currState }}</button>
            </div>
            <div class=" container w-25">
                <div class=" row">
                    <div class=" col align-self-center ">
                        <p class="fw-bolder fs-1">Click(s): {{ gameScript.clickCount }}</p>
                    </div>
                    <div class=" col align-self-center ">
                        <p class="fw-bolder fs-1">Time: {{ gameScript.timre }}</p>
                    </div>
                    <div class=" col align-self-center " v-if="gameScript.currState == 'Disabled'">
                        <p class="fw-bolder fs-1">CPS: {{ gameScript.cpsCount }}</p>
                    </div>
                    <div class=" col align-self-center " v-if="gameScript.currState == 'Disabled'">
                        <button type="button" class=" btn btn-secondary btn-lg" @click="gameScript.setDefault()">Restart</button>
                    </div>
                </div>
                <div v-if="gameScript.currState == 'Disabled'">
                    <p>{{ gameScript.resMSG }}</p>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import { gameScript } from '../assets/gemin'

export default {
    data() {
        return {
            gameScript
        }
    },
    beforeMount() {
        gameScript.setDefault()
    }
}
</script>