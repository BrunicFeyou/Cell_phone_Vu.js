<script>
import {useAjoutContactStore} from '../stores/ajoutContact.js'
export default {
    name: 'AjoutContactView',
    setup() {
        const ajoutContactStore = useAjoutContactStore()
        const addContacts = ajoutContactStore.addContacts
        const contactDetails = ajoutContactStore.contactDetails
        return {
            ajoutContactStore,
            addContacts,
            contactDetails,

        } 
    },
    actions: {
        addContact() {
            this.addContact.push(this.contactDetails)
            this.contactDetails = {
                name: '',
                number: ''
            }
            console.log(this.addContacts)
        }
    } 
}
</script>

<template>
<div>
    <form @submit.prevent="ajoutContactStore.addContact()">
        <input type="text" v-model="contactDetails.name" placeholder="Nom" >
        <input type="text" v-model="contactDetails.number" placeholder="N* tel" >
        <button type="submit">Ajouter</button>
    </form>
</div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid orange;
    border-radius: 5px;
    box-shadow: 0 0 5px orange;
    height: 300px;
    width: 600px;

}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    border-style: none;
    
}

input {
    width: 50%;
    height: 30px;
    border-radius: 5px;
    box-shadow: 0 0 5px orange;
    outline: none;
    text-align: center;
    border-style: none;
}

button {
    width: 30%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid orange;
    cursor: pointer;
    outline: none;
    text-align: center;
    border-style: none;
    background-color: orange;
    color: white;
    font-weight: bold;
}

</style>
