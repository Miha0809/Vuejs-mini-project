<template>
  <div id="wrapper">
    <!--  Start header  -->
    <header>
      <div id="title">
        <h1>Please specify</h1>
      </div>
    </header>
    <!--  End header  -->

    <!--  Start main  -->
    <main>
      <div id="links">
          <button @click="button1()" class="button button1">simple to use</button>
          <button @click="button2()" class="button button2">easy to understand</button>
          <button @click="button3()" class="button button3">fair price</button>
          <button @click="button4()" class="button button4">good customer support</button>
          <button @click="button5()" class="button button5">real time capabilities</button>
          <button @click="button6()" class="button button6">site speed</button>
          <button @click="button7()" class="button button7">happy to use</button>
          <button @click="button8()" class="button button8">user interface</button>
      </div>
    </main>
    <!--  End main  -->

    <!--  Start footer  -->
    <footer>
      <div id="buttons">
        <router-link to="/">
          <button class="button"><a id="arrow-left">←</a></button>
        </router-link>
        <router-link to="/write">
          <button class="button"><a id="arrow-right">→</a></button>
        </router-link>
      </div>
    </footer>
    <!--  End footer  -->
    
  </div>
</template>

<script>
export default {
  name: 'Specify',
  el: '#wrapper',
  data() {
    return {
      count: [0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  methods: {
    button1: function () {
      this.short('.button1', this.count[0]++)
    },
    button2: function () {
      this.short('.button2', this.count[1]++)
    },
    button3: function () {
      this.short('.button3', this.count[2]++)
    },
    button4: function () {
      this.short('.button4', this.count[3]++)
    },
    button5: function () {
      this.short('.button5', this.count[4]++)
    },
    button6: function () {
      this.short('.button6', this.count[5]++)
    },
    button7: function () {
      this.short('.button7', this.count[6]++)
    },
    button8: function () {
      this.short('.button8', this.count[7]++)
    },
    short: function (nameButton, count) {
      let btn = document.querySelector(nameButton)

      if (count % 2 === 0) {
        btn.style.backgroundColor = "yellow"
      } else {
        btn.style.backgroundColor = "white"
      }
    }
  }
}
</script>

<style scoped>
#wrapper {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 10px #ccc;
}


#links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#links button {
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  background-color: white;
}

footer {
  margin-top: 10px;
  width: 100%;
}

#buttons {
  margin-top: 20px;
}

#buttons button {
  margin: 30px;
  background-color: #bdbdbd;
  border: 0 solid;
}

#buttons button a {
  color: white;
  font-size: 50px;
  text-decoration: none;
}
</style>

