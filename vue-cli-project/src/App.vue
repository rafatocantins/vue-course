<template>
    <div class="container">
          <server-header></server-header>
        <hr>
        <div class="row">
            <server-list :servers="servers"></server-list>
            <div class="col-xs-12 col-sm-6">
                <server-details></server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <server-footer></server-footer>
        </div>
    </div>
</template>

<script>
import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';
import ServerList from './components/ServerList.vue';
import ServerDetails from './components/ServerDetails.vue';
import { eventBus } from './main';

export default {
  data: function() {
    // add data from the parent to 
        return {
            servers: [
                {id:1, status: 'Normal'},
                {id:2, status: 'Critical'},
                {id:3, status: 'Normal'},
                {id:4, status: 'Normal'}
            ]
        }
    },
  components: {
      'server-header': Header,
      'server-footer': Footer,
      'server-list': ServerList,
      'server-details':ServerDetails
  },
  created: function() {
    eventBus.$on('statusWasChanged', added_server => {

      if(added_server.status === 'Normal'){
        return added_server.status = 'Critical'
      }else{
        return added_server.status = 'Normal'
      }
    });
  }
}
</script>

