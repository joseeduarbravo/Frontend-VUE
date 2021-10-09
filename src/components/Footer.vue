<template>
  <div>
    <p>Proyecto creado por el equipo de programadores</p>
    <p>
      <b>contactenos</b>: <a :href="emailLink">{{ name }}</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "joseeduarbravo@yahoo.com",
      name: "José Eduar Guerrero Bravo",
    };
  },
  computed: {
    emailLink(){
      return 'mailto:' + this.email;
    }
  },
};
</script>

<style>
</style>
