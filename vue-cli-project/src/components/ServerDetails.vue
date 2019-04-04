<template>
    <div>
        <p v-if="added_server">Server #{{ added_server.id }} - {{ added_server.status }}</p>
        <p v-else>Server detais are currently not updated</p>
        <button v-if="added_server" @click="emitStatus(added_server)">Change Status</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    props: ['server'],
    data: function() {
        return{
            added_server: null
        }
    },
    created(){
        eventBus.$on('serverWasAdded', server => {
            return this.added_server = server;
        })
    },
    methods: {
        emitStatus(added_server){
            eventBus.$emit('statusWasChanged',  added_server);
        }
    }
}
</script>

