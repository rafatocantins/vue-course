<template>
    <div class="container">
          <server-header></server-header>
        <hr>
        <div class="row">
            <server-list></server-list>
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
import Header from './Header.vue';
import Footer from './Footer.vue';
import ServerList from './ServerList.vue';
import ServerDetails from './ServerDetails.vue';

export default {
  components: {
      'server-header': Header,
      'server-footer': Footer,
      'server-list': ServerList,
      'server-details':ServerDetails
  }
}
</script>

