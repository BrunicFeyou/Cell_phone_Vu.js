<script>
export default {
    name : 'ContactView',
    data() {
        return{
            contacts: [
               {
                 name: '',
                 number: '',
                 date: '',
                 time: "",
               }
            ] 
        }   
           
    },
       
}
</script>


<template>
<div>
    <div class="liste-contact" v-for="contact in contacts"> <!-- Ajouter un v-for pour chaque contact -->
        <div>
         <div class="caller">
            <p>{{contact.name }}</p>
            <p>{{contact.number}}</p>
         </div>
         <div class="details">
            <p>{{ contact.date }}</p>
            <p>{{ contact.time }}</p>
         </div>
        </div>
    </div>
</div>
</template>