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
<div>
    <div>
        <form @submit.prevent="callStore.appelnumber()">
            <input type="number" v-model="phoneNumbers.number">
            <!-- Uitliser un v-if pour dire que l'input apparait si le numéro est reconnu -->
            <input type="text">
            <div>
                <div class="lignes" v-for="ligne in touches">
                    <div class="touchNumbers" v-for="touche in ligne">
                        <button @click="numero += touche">{{ touche }}</button>
                    </div>
                </div>
            </div>
            <button type="submit">Appeler</button>
        </form>
        
    </div>
</div>

</template>


<style scoped>
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