<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <!-- cannot use a object as a key duhhhhhhhh you stupid fuck --> 
            <li style="margin-bottom:5px;" class="list-group-item" v-for="(server,  index) in servers" :key="server.id"> 
                {{server.id}} - {{server.status}} #  - {{ index }}
                <button @click="emitServerAdding(server)" style="margin-left:5px;">Change State</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props: {
        servers: Array
    },
    methods: {
        emitServerAdding(server){
            eventBus.$emit('serverWasAdded', server);
        }
    }
}
</script>
