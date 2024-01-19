<script>
import {useAjoutContactStore} from '../stores/ajoutContact.js'
import {useCallStore} from '../stores/call.js'
export default {
    name: 'ContactView',
    setup() {
        const ajoutContactStore = useAjoutContactStore()
        const addContacts = ajoutContactStore.addContacts
        const contactDetails = ajoutContactStore.contactDetails
        const callStore = useCallStore()
        const listPhoneNumbers = callStore.listPhoneNumbers
        return {
            ajoutContactStore,
            addContacts,
            contactDetails,
            callStore,
            listPhoneNumbers,

        }
    },
    computed: {
        addContact() {
            this.addContact.push(this.contactDetails)
            this.contactDetails = {
                name: '',
                number: ''
            }
            console.log(this.addContacts)
        }, 
        callNumber(callerNumber) {
            this.listPhoneNumbers.push(callerNumber)
            this.callerNumber = {
                number: '', 
                name: '',
                date: new Date().toLocaleString(),
                time: new Date().toLocaleTimeString(),  
            }
            console.log(this.listPhoneNumbers)
        }
    } 
}
</script>


<template>
<div class="allContacts" v-if="listPhoneNumbers!=[]" >
    Contacts
    <div class="contactList" v-for="contact in addContacts"> <!-- Ajouter un v-for pour chaque contact -->
       <div class="contain-infos">
            <div>
                <img src="" alt="">
                <p class="nom">{{ contact.name }}</p>
                <p class="numero">{{ contact.number }}</p>
            </div>
            <div class="btn-appeler">
                <button @click="callStore   .callNumber(contact)">appeler</button>
                <!-- Mettre une icone pour tous les btn -->
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.allContacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid orange;
    border-radius: 5px;
    box-shadow: 0 0 5px orange;
    height: auto;
    width: 600px;
    padding-top: 20px;
    font-size: 20px;
    font-weight: 600;
    

}

.contactList {
    display: flex;
    align-items: center;
    border-style: none;
    border-bottom: 1px solid orange;
    height: auto;
    width: 100%;
    margin-top: 10px;
    
}
.contain-infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    border-style: none;
    padding: 15px;
}

.nom {
    font-weight: 600;
    font-size: 25px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.numero {
    color: gray;
    font-size: 15px;
    padding-left: 2px;
    
}

button {
    border-style: none;
    border: 1px solid orange;
    border-radius: 5px;
    background-color: orange;
    color: white;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    
    
}


</style>