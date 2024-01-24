import {defineStore} from "pinia" 

export const useCallStore = defineStore("call",{  
    state: () => ({ 
        listPhoneNumbers: [],
        chiffres: '',
        phoneNumbers: {
        number: '',
        name: '',
        date: new Date().toLocaleString(),
        time: new Date().toLocaleTimeString(),     
        },
            
       
    }), 
    actions: {
        inputNumber(index) {
            this.chiffres += index
        },
        /* appelnumber() {
            
            this.phoneNumbers = {
                number: 'inconnue' , 
                name: '',
                date: new Date().toLocaleString(),
                time: new Date().toLocaleTimeString(),  
                
            }
            this.listPhoneNumbers.push(this.phoneNumbers)
            console.log(this.listPhoneNumbers, 'listPhoneNumbers')
            
        },  */
        callNumber(callerNumber) {
            this.listPhoneNumbers.push(callerNumber)
            this.callerNumber = {
                number: "", 
                name: '',
                date: new Date().toLocaleString(),
                time: new Date().toLocaleTimeString(),  
            }
            console.log(this.listPhoneNumbers)
        },
        
    }


 })