<template>
  <div class="wrapper">
    <parallax class="header-small" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>.</h1>
            </div>
          </div>
        </div>
      </div>
    </parallax>


    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <contents>
            <title-md id="title-md">
              <h2> 💻Programming Projects & Activities </h2>
              <hr/>
              <zero-md src="./md/title.md"></zero-md>
              <hr/>
            </title-md>

            <about-me id="about-me">
              <h2>문지현, Jihyun Moon</h2>
              <h3>🎓 Junior SW Engineer & Game Programmer</h3>
              <zero-md src="./md/aboutme.md"></zero-md>

              <h3>📝Experience</h3>
              <zero-md src="./md/experience.md"></zero-md>

              <h3>📚 Tech Stack</h3>
              <zero-md src="./md/techstack.md"></zero-md>

            </about-me>

            <br>
            <hr/>

            <project-list id="project-list">
              <!--            <div class="title">-->
              <!--              <h2>🕹️Projects</h2>-->
              <!--              클릭하여 상세 내역을 확인할 수 있습니다.-->
              <!--            </div>-->
              <h2>🕹️Projects</h2>
              클릭하여 상세 내역을 확인할 수 있습니다.
              <h3>2021</h3>
              <details id="1">
                <summary>[해커톤] 클라우드 서비스를 활용한 웹사이트</summary>
                <div><br>
                  <zero-md src="./projects/202108-08.md"></zero-md>
                  <br></div>
              </details>
              <details id="2">
                <summary>[게임] 2D 모바일 게임 리팩토링</summary>
                <div><br>
                  <zero-md src="./projects/202103-04.md"></zero-md>
                  <br></div>
              </details>

              <h3>2020</h3>
              <details id="3">
                <summary>[게임] 2D 스토리텔링 게임</summary>
                <div><br>
                  <zero-md src="./projects/202010-12.md"></zero-md>
                  <br></div>
              </details>
              <details id="4">
                <summary>[해커톤] 2D 플랫포머 게임</summary>
                <div><br>
                  <zero-md src="./projects/202011-11.md"></zero-md>
                  <br></div>
              </details>
              <details id="5">
                <summary>[해커톤] API 활용 모바일 어플리케이션</summary>
                <div><br>
                  <zero-md src="./projects/202010-10.md"></zero-md>
                  <br></div>
              </details>
              <details id="6">
                <summary>[전공] 클라우드 컴퓨팅 및 프로그래밍</summary>
                <div><br>
                  <zero-md src="./projects/202009-12-2.md"></zero-md>
                  <br></div>
              </details>
              <details id="7">
                <summary>[전공] 다양한 기술스택을 활용한 웹사이트 개발</summary>
                <div><br>
                  <zero-md src="./projects/202009-12.md"></zero-md>
                  <br></div>
              </details>

              <h3>2019</h3>
              <details id="8">
                <summary>[졸업] 자연어 처리와 기계학습을 통한 감정 분석</summary>
                <div><br>
                  <zero-md src="./projects/201907-202006.md"></zero-md>
                  <br></div>
              </details>
              <details id="9">
                <summary>[게임] 2D 경영 시뮬레이션 모바일 게임</summary>
                <div><br>
                  <zero-md src="./projects/201905-08.md"></zero-md>
                  <br></div>
              </details>
            </project-list>

            <br>
            <hr/>

            <awards id="awards">
              <h2>🏆Awards</h2>
              <zero-md src="./md/awards.md"></zero-md>
            </awards>

            <br>
            <hr/>

            <feature id="feature">
              <h2>👍 Featured Works</h2>
              <zero-md src="./md/feature.md"></zero-md>
            </feature>

          </contents>

        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>
<style lang="scss">

// remove switch in summary
summary {list-style: none}
summary::-webkit-details-marker {display: none; }

details {
  margin: 5px;
}

details summary::before {
  content:"📘 ";
  /* you can style it however you want, use background-image for example */
}

/* By using [open] we can define different styles when the disclosure widget is open */
details[open] summary::before {
  content:"📖 ";
}

details[open] summary{
  font-weight: bold;
  //font-size: 20px;
}

.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}

</style>
