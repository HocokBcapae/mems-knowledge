<template>
  <div class="container">
    <header class="header">
      <h1 class="title">центральный текст</h1>
    </header>
    <footer class="menu">
      <div class="menu-grid">
        <div class="menu-row">
          <router-link to="/page1" class="menu-item">страница 1</router-link>
          <router-link to="/page2" class="menu-item">страница 2</router-link>
        </div>
        <div class="menu-row">
          <router-link to="/page3" class="menu-item">страница 3</router-link>
          <router-link to="/page4" class="menu-item">страница 4</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  position: relative;
  text-align: center;
}

.header {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  color: white;
  font-weight: 600;
  font-size: 2.5rem;
}

.menu {
  position: absolute;
  bottom: 40px;
  width: 100%;
}

.menu-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.menu-row {
  display: flex;
  gap: 20px;
}

.menu-item {
  transition: 0.8s;
  padding: 10px 20px;
  background-color: #294D61;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  width: 200px;
  text-align: center;
  font-weight: 500;
}

.menu-item:hover {  
  box-shadow: 0px 0px 66px 12px rgba(109, 165, 192, 0.4);
  transform: scale(1.05); 
  cursor: pointer;
  background-color: #6DA5C0;
}
</style>