<template>
  <div class="wrapper">
    <div id="nav-tabs">
      <h3>Navigation Tabs</h3>
      <div class="md-layout">
        <div class="md-layout-item md-size-50 md-small-size-100">
          <h3><small>Tabs with Icons on Card</small></h3>
          <nav-tabs-card no-label style="min-width: 800px; min-height: 400px">
            <template slot="content">
              <md-tabs class="md-primary" md-alignment="left">

                <md-tab id="tab-home13" md-label="Profi23e2">
                  <div align="left">
                    <h3>2021</h3>
                    <details>
                      <summary>[해커톤] 클라우드 서비스를 활용한 웹사이트</summary>
                      <div>
                        <zero-md src="./projects/202108-08.md"></zero-md>
                      </div>
                    </details>
                    <li>[해커톤] 클라우드 서비스를 활용한 웹사이트</li>
                    <li>[게임] 2D 모바일 게임 리팩토링</li>
                    <hr />
                    <h3>2020</h3>
                    <li>[게임] 2D 스토리텔링 게임</li>
                    <li>[해커톤] 2D 플랫포머 게임</li>
                    <li>[해커톤] API 활용 모바일 어플리케이션</li>
                    <li>[전공] 클라우드 컴퓨팅 및 프로그래밍</li>
                    <li>[전공] 다양한 기술스택을 활용한 웹사이트 개발</li>
                    <hr />
                    <h3>2019</h3>
                    <li>[졸업] 자연어 처리와 기계학습을 통한 감정 분석</li>
                    <li>[게임] 2D 경영 시뮬레이션 모바일 게임</li>
                  </div>
                </md-tab>


                <md-tab id="tab-home1" md-label="Profile2" md-icon="face">
                  <p>
                    <zero-md src="./projects/202010-10.md"></zero-md>
                  </p>
                </md-tab>

                <md-tab id="tab-home" md-label="Profile" md-icon="face">
                  <p>
                    <zero-md src="./projects/202010-10.md"></zero-md>
                  </p>
                </md-tab>

                <md-tab id="tab-pages" md-label="Messages" md-icon="chat">
                  <p>
                    <zero-md src="./projects/202010-10.md"></zero-md>
                  </p>
                </md-tab>

                <md-tab id="tab-posts" md-label="Settings" md-icon="build">
                  <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";

export default {
  components: {
    NavTabsCard
  }
};
</script>

<style lang="css">
</style>
