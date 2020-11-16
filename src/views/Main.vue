<template>
  <div id="wrapper">

    <header>
      <div>
        <h1>Would you recommend our service to others?</h1>
      </div>
    </header>

    <main>
      <div id="buttons">
        <a href="/specify"><button @click="buttons('button1')" class="buttons" id="button1">1</button></a>
        <a href="/specify"><button @click="buttons('button2')" class="buttons" id="button2">2</button></a>
        <a href="/specify"><button @click="buttons('button3')" class="buttons" id="button3">3</button></a>
        <a href="/specify"><button @click="buttons('button4')" class="buttons" id="button4">4</button></a>
        <a href="/specify"><button @click="buttons('button5')" class="buttons" id="button5">5</button></a>
        <a href="/specify"><button @click="buttons('button6')" class="buttons" id="button6">6</button></a>
        <a href="/specify"><button @click="buttons('button7')" class="buttons" id="button7">7</button></a>
        <a href="/specify"><button @click="buttons('button8')" class="buttons" id="button8">8</button></a>
        <a href="/specify"><button @click="buttons('button9')" class="buttons" id="button9">9</button></a>
        <a href="/specify"><button @click="buttons('button10')" class="buttons" id="button10">10</button></a>
      </div>
    </main>

  </div>
</template>

<script>
export default {
  name: 'Main',
  el: '#wrapper',
  mounted: function () {
    alert('Я посилання мусів зробити через ')
  },
  methods: {
    buttons: function (nameButton) {
      let element = document.getElementById(nameButton)
      // element.classList.add('test')
      element.style.backgroundColor = "yellow"
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
.buttons {
  background-color: transparent;
  border: 1px solid black;
}
</style>