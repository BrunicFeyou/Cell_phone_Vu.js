<script>
import {useCallStore} from '../stores/call.js'
export default {
    name: 'JournalView',
    setup() {
        const callStore = useCallStore()
        const listPhoneNumbers = callStore.listPhoneNumbers
        return {
            listPhoneNumbers,
        }
    },
    computed: {
        appelnumber() {
            this.listPhoneNumbers.push(this.phoneNumbers)
            this.phoneNumbers = {
                numero: '',   
            }
            console.log(this.listPhoneNumbers)
            
        }
    }
}
</script>

<template>
    <div class="callOut">
        <h1>Journal d'appels</h1>
        <div class="AllCalls" v-for="listPhoneNumber in listPhoneNumbers">
            <div class="callerDetails">
                <div class="caller">
                    <p class="nom">{{ listPhoneNumber.name }}</p>
                    <p class="numero">{{ listPhoneNumber.number }}</p>
                   
                    
                </div>
                <div class="details">
                    <p>{{ listPhoneNumber.date }} à {{ listPhoneNumber.time }}</p>
                    <button>appeler</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.callOut {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    border: 1px solid orange;
    border-radius: 5px;
    box-shadow: 0 0 5px orange;
    height: auto;
    width: 600px;
    margin: 0 auto;
}

.AllCalls {
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    border-bottom: 1px solid orange;
    border-radius: 5px;
    
    height: auto;
    width: 100%;
    margin: 10px;
}
.callerDetails {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    height: auto;
    width: 100%;
    padding: 0 15px;
}
.caller {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
    border-style: none;
    padding: 15px;
    font-size: 20px;
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

.details {
    display: flex;
    width: 500%;
    justify-content: space-between;
    font-size: 12px;
    align-items: center;
   
    
}

button {
    border-style: none;
    border: 1px solid orange;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    text-align: center;
    border-style: none;
    background-color: orange;
    color: white;
    font-weight: bold;
    font-size: 17px;
    padding: 10px;
}



</style>