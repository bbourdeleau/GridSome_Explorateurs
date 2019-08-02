<template>
  <div class="layout">
    <header class="header">
      <strong>
        <img src="../assets/logo_explorateurs@1x.png"/>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Articles</g-link>
 <g-link class="nav__link" to="/category/apprendre">Apprendre</g-link> 
 <g-link class="nav__link" to="/category/utiliser">utiliser</g-link> 
 <g-link class="nav__link" to="/category/inspirer">s'insipirer</g-link> 
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}

img {
  max-width: 100%;
}

nav[role="navigation"] {
  text-align: center;
}
nav[role="navigation"] a {
  display: inline-block;
  margin: 1.0em 0.75em 2.0em;
}

.layout {
  max-width: 600px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.header {
  padding: 1%;
  height: 200px;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0 auto;
  background-color: white;
  display: block;
  border-bottom: solid #6128A1 5px;
  border-bottom-color:purple;
  position: fixed;
}
nav.nav {
  height: 60px;
  float: right;
  color:white;
  font-size: 24px;
  font-family: exo;
  text-decoration: none;
  margin-right: 5%;
  margin-top: 2.5%;
}
.nav__link {
  margin-left: 20px;
}
.post-list {
  list-style: none;
  padding-left: 0;
  margin-top: 250px;
}
.post-list li {
  padding: 1em 0;
}
p {
  font-size: 16px;
}
h2 {
  font-size:32;
}
</style>
