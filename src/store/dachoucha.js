router.beforeEach((to, from, next) => {
    // console.log("loggedIn", store.state.loggedIn)
    if (to.meta.requiresAuth) {
      if (store.state.loggedIn) {
        next()
      } else if (localStorage.getItem("user")) {
        store.commit("login", JSON.parse(localStorage.getItem("user")))
        next({ name: to.name })
      } else {
        next({ name: "login" })
      }
    } else if (store.state.loggedIn) {
      console.log("here")
      next({ name: "home" })
    } else if (localStorage.getItem("user")) {
      store.commit("login", JSON.parse(localStorage.getItem("user")))
      next()
    } else {
      next()
    }
  })