<template>
  <div class="TheQuestion">
    <div class="QBodyContainer">
      <div class="operations">
        <add-vote
          :votesCount="data.votesCount"
          :docID="$route.params.id"
          :vote="data.qvote"
          collection="questions"
        />
        <Report collection="questions" :docID="$route.params.id" :reported="data.aReport"/>
        <Delete v-if="data.isOwner" collection="questions" :docID="$route.params.id" :deleteFun="deleteFun"/>
        <!-- <v-icon class="reportIcon" title="إبلاغ" outline>report</v-icon> -->
      </div>
      <div class="QTitleAndQBody">
        <h1 class="QTitle" dir="auto">{{ data.title }}</h1>
        <p class="QBody" v-html="data.body"></p>
      </div>
    </div>
    <p>تم النشر في {{ data.createdAt }}</p>
  </div>
</template>

<script>
import AddVote from './AddVote.vue'
import Delete from './Delete.vue'
import Report from './Report.vue'

export default {
  name: 'TheQuestion',
  components: { AddVote, Report, Delete },
  computed: {
    data() {
      return this.$store.state.question.question
    },
  },
  methods: {
    deleteFun(){
      this.$router.push('/')
    }
  },
}
</script>

<style lang="scss">
.TheQuestion {
  .QBodyContainer {
    display: flex;
    gap: 1rem;
    flex-direction: row-reverse;
  }
  .QBody {
    flex: auto;
  }
  .QTitle {
    text-align: initial;
    padding: 1rem 0px;
  }
  .operations {
      display: flex;
      flex-direction: column;
          align-items: center;
      .reportIcon:active{
        color: red;
      }
    }
  .QTitleAndQBody{
    flex: 1;
  }
}
</style>
