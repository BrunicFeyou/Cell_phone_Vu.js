import {defineStore} from "pinia" 

export const useCallStore = defineStore("call",{  
    state: () => ({ 
        listPhoneNumbers: [],
        phoneNumbers: {
        number: '',
        date: new Date().toLocaleString(),
        time: new Date().toLocaleTimeString(),

            
        },
            
            touches: [
                ['1', '2', '3'],
                ['4', '5', '6'],
                ['7', '8', '9'],
                ['*', '0', '#']
            ] 
    }), 
    actions: {
        appelnumber() {
            this.listPhoneNumbers.push(this.phoneNumbers)
            this.phoneNumbers = {
                number: '', 
                date: new Date().toLocaleString(),
                time: new Date().toLocaleTimeString(),  
            }
            console.log(this.listPhoneNumbers)
            
        }
    }


 })