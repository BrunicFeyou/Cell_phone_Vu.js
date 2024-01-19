import {defineStore} from "pinia" 
export const useAjoutContactStore = defineStore("ajoutContact",{ 
    state: () => ({ 
        addContacts: [], 
        contactDetails: {
            name: '',
            number: '',
        },
    }),
    actions: {
        addContact() {
            this.addContacts.push(this.contactDetails)
            this.contactDetails = {
                name: '',
                number: '',
            }
            console.log(this.addContacts)
        }
    }

})