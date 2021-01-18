<template>
  <div class="loader-overlay">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.loader-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 100000;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #3182ce;
  border-color: #3182ce transparent #3182ce transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>