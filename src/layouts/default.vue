<template>
  <v-app>
    <div class="mainCon">
      <div class="subCon">
        <AppHeader />
        <Nuxt />
      </div>
      <AppFooter />
    </div>
    <!-- float search btn for mobile view -->
    <v-btn
      v-if="$vuetify.breakpoint.xsOnly"
      :key="activeFab.icon"
      bottom
      left
      large
      fab
      :color="activeFab.color"
      class="float"
      @click="dialog = true"
    >
      <v-icon large>{{ activeFab.icon }}</v-icon>
    </v-btn>
    <v-dialog
      v-if="$vuetify.breakpoint.xsOnly"
      v-model="dialog"
      class="searchDialog"
    >
      <v-card>
        <form class="search-form" @submit="searchSubmit">
          <input
            v-model="search"
            type="text"
            placeholder="ابحث عن سؤال"
            class="search"
          />
          <v-icon class="search-icon" color="primary" @click="searchSubmit"
            >search</v-icon
          >
        </form>
      </v-card>
    </v-dialog>
    <!-- ----------------------------------------------------------------------------- -->
    <SignInFormDialog />
  </v-app>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    search: '',
  }),

  async fetch() {
    await this.$axios.$get('groups/get').then((res) => {
      this.$store.commit('categories/add', res)
    })
  },
  computed: {
    activeFab() {
      return { color: 'primary', icon: 'search' }
    },
  },
  async mounted() {
    const token = this.$cookies.get('authToken')
    if (token && this.$store.state.user.displayName) {
      return
    }
    if (token) {
      await this.$axios
        .$get('users/get', {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          this.$store.commit('user/login', { ...res, token })
        })
        .catch((e) => {
          console.error(e)
          this.$store.commit('user/logout')
          this.$cookies.remove('authToken')
        })
    }
  },
  methods: {
    searchSubmit(e) {
      e.preventDefault()
      if (this.search) {
        this.dialog = false
        this.$router.push(`/search?q=${this.search}`)
      }
    },
  },
}
</script>
<style lang="scss">
@media (max-width: 768px) {
  .v-dialog {
    .v-card {
      padding: 0.5rem;

      .search-form {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        max-width: 100rem;
        border-radius: 10px;

        .search-icon {
          font-size: 1.7rem;
          margin-left: 0.5rem;
        }

        .search {
          width: 100%;
          font-size: 14px;
          padding: 8px 10px;
          background-color: transparent;
        }

        .search:focus {
          outline: none;
        }
      }
    }
  }
  .float {
    position: fixed !important;
    bottom: 0;
    left: 0;
    margin: 2rem 1rem;
    z-index: 10;
  }
}
.mainCon {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .subCon {
    flex: 1;
  }
}
</style>
