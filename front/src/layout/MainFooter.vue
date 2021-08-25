<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://github.com/solidcellaMoon">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://github.com/solidcellaMoon/My-Portfolio/blob/main/files/gameDev.pdf">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }},
        <a href="https://github.com/solidcellaMoon" target="_blank">@solidcellaMoon</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
