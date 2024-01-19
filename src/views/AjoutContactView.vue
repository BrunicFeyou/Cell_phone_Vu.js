<script>
export default {
    name: 'AjoutContactView',
    data() {
        return {
            contacts: [
                {
                    name: '',
                    number: '',
                   
                }
            ]
        }

    },
    method: {
        appelnumber() {
            this.contacts.push(this.phoneNumbers)
            this.phoneNumbers = {
                number: '',
            }
            console.log(this.contacts)

        }
    }
}
</script>

<template>

</template>