<script>
import {useCallStore} from '../stores/call.js'

export default {
    name: 'ClavierView',
    setup() {
        const phoneNumbers = useCallStore().phoneNumbers
        const listPhoneNumbers = useCallStore().listPhoneNumbers
        const callStore = useCallStore()
        const touches = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['*', '0', '#']
        ]
       
        return {
            touches, 
            listPhoneNumbers, 
            phoneNumbers, 
            callStore
        }
    }, 
    computed: {
        appelnumber() {
            this.listPhoneNumbers.push(this.phoneNumbers)
            this.phoneNumbers = {
                number: '',   
            }
            console.log(this.listPhoneNumbers)
            
        }
    
    }

}

</script>


<template>
<div class="clavier">
    <h1>Clavier</h1>
        <form class="form-clavier" @submit.prevent="callStore.appelnumber()">
            <input type="number" v-model="phoneNumbers.number" readonly placeholder="Numero">
            <!-- Uitliser un v-if pour dire que l'input apparait si le numéro est reconnu -->
            <!-- <input type="text"> -->
            <div>
                <div class="lignes" v-for="(ligne, index) in touches" :key="index">
                    <div class="touchNumbers" v-for="(touche, index) in ligne" :key="index">
                        <button @click="numero += touche">{{ touche }}</button>
                    </div>
                </div>
            </div>
            <button type="submit">Appeler</button>
        </form>
        
    
</div>

</template>


<style scoped>

    .clavier {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid orange;
        border-radius: 5px;
        box-shadow: 0 0 5px orange;
        height: auto;
        width: 600px;
        margin: 0 auto;
    }
    .form-clavier {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-style: none;
    }
    input {
        width: 80%;
        height: 30px;
        margin: 10px;
        border-radius: 5px;
        border: 1px solid orange;
        box-shadow: 0 0 5px orange;
        text-align: center;
    }
    button {
        width: 80%;
        height: 30px;
        margin: 10px;
        border-radius: 5px;
        border: 1px solid orange;
        box-shadow: 0 0 5px orange;
        text-align: center;
        background-color: transparent;
        cursor: pointer;
    }

   .button:hover {
        background-color: orange;
        color: white;
    }
    .lignes {
        display: flex;
        flex-direction: row;
        
    }
    .touchNumbers {
        width: 30%;
        height: 30px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>