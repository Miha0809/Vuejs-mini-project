<template>
  <div id="wrapper">
    <header>
      <div id="close">
        <p><a href="">×</a></p>
      </div>
      <div id="title">
        <h3>have something to write?</h3>
      </div>
    </header>

    <main>
      <textarea></textarea>
      <div id="button">
        <button type="Submit">submit</button>
      </div>
    </main>

    <footer>
      <router-link to="/specify"><button class="button"><a href="{{ Specify }}" id="arrow-left">←</a></button></router-link>
    </footer>

  </div>
</template>

<script>
export default {
  name: "Write",
  el: "#wrapper"
}
</script>

<style scoped>
#wrapper {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 10px #ccc;
}

header #close p a{
  color: black;
  text-decoration: none;
  float: right;
  font-size: 20px;
  margin-right: 5px;
}
header #title h3{
  padding-top: 20px;
}

main {
  margin: 0 auto;
  width: 80%;
}
main textarea {
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  min-height: 150px;
  border: 1px solid #ccc;
}
main #button button {
  border: 0 solid;
  background-color: #ffe000;
  padding: 5px 20px;
  font-weight: bold;
  font-size: 10px;
}

footer button {
  margin: 10px;
  background-color: #bdbdbd;
  border: 0 solid;
}
footer button a {
  color: white;
  font-size: 30px;
  text-decoration: none;
}
</style>