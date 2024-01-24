<script>
import {useCallStore} from '../stores/call.js'
import {useAjoutContactStore} from '../stores/ajoutContact.js'

export default {
    name: 'ClavierView',
    setup() {
        const callStore = useCallStore()
        const listPhoneNumbers = callStore.listPhoneNumbers
        const ajoutContactView = useAjoutContactStore()
        const phoneNumbers = callStore.phoneNumbers
        const touches = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['*', '0', '#']
        ]
       
        return {
            callStore,
            touches,
            ajoutContactView,
            phoneNumbers,
            listPhoneNumbers

        }
    }, 

    computed: {
        appelNumber: function() {
            console.log("helloooo");
            const findContacts = this.ajoutContactView.addContacts.find(contact => contact.number == this.inputValues)
            console.log(this.ajoutContactView.addContacts, 'tableau de contact');
            if (findContacts) {
                console.log("hello");
                this.phoneNumbers = {
                    name: findContacts.name,
                    number: this.inputValues,
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString(),
                }
                return this.listPhoneNumbers.push(this.phoneNumbers),
                console.log(this.phoneNumbers),
                console.log(this.listPhoneNumbers, 'contact trouvé');
            } else {
                this.phoneNumbers = {
                    name: 'Inconnu',
                    number: this.inputValues,
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString(),
                }
                return this.listPhoneNumbers.push(this.phoneNumbers),
                console.log(this.phoneNumbers),
                console.log(this.listPhoneNumbers, 'contact non trouvé');
            }
                
            
            /* this.phoneNumbers = {
                name: 'Inconnu',
                number: this.inputValues,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
            }
            return this.listPhoneNumbers.push(this.phoneNumbers),
            console.log(this.phoneNumbers),
            console.log(this.listPhoneNumbers); */
          
        },
        inputValues:{
            get() {
                console.log(this.callStore.chiffres);
                return this.callStore.chiffres
            },
            set(value) {
                this.callStore.chiffres = value;
            }  
        }
    }

}

</script>


<template>
<div class="clavier">
    <h1>Clavier</h1>
        <form class="form-clavier" >
            <input type="number" v-model="inputValues"  placeholder="Numero">
          
            <div>
                <div class="lignes" v-for="(ligne, index) in touches">
                    <div class="touchNumbers" v-for="(touche, index) in ligne">
                        <span class="button" @click="inputValues += touche">{{ touche }}</span>
                    </div>
                </div>
            </div>
            <button type="submit" @click.prevent="appelNumber">Appeler</button>
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
    .button {
        width: 80%;
        height: 30px;
        margin: 10px;
        border-radius: 5px;
        border: 1px solid orange;
        box-shadow: 0 0 5px orange;
        text-align: center;
        background-color: transparent;
        cursor: pointer;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
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
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
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