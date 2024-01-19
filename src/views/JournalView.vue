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
<div v-for="listPhoneNumber in listPhoneNumbers">
    <div>
        <div class="caller">
            <p>{{ listPhoneNumber.name }}</p>
            <p>{{ listPhoneNumber.number }}</p>
        </div>
        <div class="details">
            <p>{{ listPhoneNumber.date }}</p>
            <p>{{ listPhoneNumber.time }}</p>
        </div>
    </div>

</div>


</template>