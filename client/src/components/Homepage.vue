<template>
  <div class="homepage-container">
    <!-- top section -->
    <section class="top-section">
      <div class="container-fluid top-section-card">
        <img
          alt="rzufil image"
          class="rounded-circle"
          src="../assets/images/rzufil.webp"
        />
        <h2><strong>Rafael Zufi Leite</strong></h2>
        <p>Software Engineer</p>
      </div>
    </section>

    <!-- middle section -->
    <section class="middle-section">
      <div class="container">
        <h2><strong>Languages and Technologies</strong></h2>
        <div class="row">
          <div class="col-md-6 technology_rating">
            PHP
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="half-fill"></span>
            </div>
          </div>
          <div class="col-md-6 technology_rating">
            JavaScript
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="half-fill"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 technology_rating">
            MySQL
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="half-fill"></span>
              <span></span>
            </div>
          </div>
          <div class="col-md-6 technology_rating">
            HTML
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 technology_rating">
            CSS
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="half-fill"></span>
              <span></span>
            </div>
          </div>
          <div class="col-md-6 technology_rating">
            Java
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 technology_rating">
            C
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="col-md-6 technology_rating">
            Node.js
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="half-fill"></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 technology_rating">
            Vue.js
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="col-md-6 technology_rating">
            MongoDB
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 technology_rating">
            Solidity
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="half-fill"></span>
              <span></span>
            </div>
          </div>
          <div class="col-md-6 technology_rating">
            React
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="half-fill"></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 technology_rating">
            WordPress
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="half-fill"></span>
            </div>
          </div>
          <div class="col-md-6 technology_rating">
            WooCommerce
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 technology_rating">
            Laravel
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span></span>
            </div>
          </div>
          <div class="col-md-6 technology_rating">
            Magento
            <div class="rating_scale">
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span class="fill"></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- bottom section -->
    <section class="bottom-section">
      <div class="container">
        <h2><strong>Projects</strong></h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <h2>Portfolio Site</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>This portfolio site created using the MEVN stack.</p>
              </div>
              <div class="card-footer">
                <div class="footer-link">
                  <a
                    href="https://github.com/rzufil/rzufil-portfolio"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-secondary">
                      Repository
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <h2>Bills Reminder</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>A MERN web app to remind you to pay your bills.</p>
              </div>
              <div class="card-footer">
                <div class="footer-link">
                  <a
                    href="https://github.com/rzufil/bills-reminder"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-secondary">
                      Repository
                    </button>
                  </a>
                </div>
                <div class="footer-link">
                  <a
                    href="https://www.bills-reminder.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-secondary">
                      Site
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <h2>Solidity Images</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>Image showcase app using Solidity for the smart contract and React for the front-end.</p>
              </div>
              <div class="card-footer">
                <div class="footer-link">
                  <a
                    href="https://github.com/rzufil/solidity-images"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-secondary">
                      Repository
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <h2>Laravel Chatbot</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>A Laravel chatbot that handles user signup and currency conversion.</p>
              </div>
              <div class="card-footer">
                <div class="footer-link">
                  <a
                    href="https://github.com/rzufil/chatbot"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-secondary">
                      Repository
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <h2>RecklessDriving</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>
                  JavaFX racing game. Try not to hit any cars while driving
                  recklessly.
                </p>
              </div>
              <div class="card-footer">
                <div class="footer-link">
                  <a
                    href="https://github.com/rzufil/RecklessDriving"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-secondary">
                      Repository
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <h2>MathSolver1.0</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>Android app that solves simple math functions.</p>
              </div>
              <div class="card-footer">
                <div class="footer-link">
                  <a
                    href="https://github.com/rzufil/MathSolver1.0"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-secondary">
                      Repository
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: "Homepage",
};
</script>

<style lang="css" scoped>
.homepage-container {
  padding: 100px 0 50px 0;
  background-color: #dddddd;
}
.top-section {
  padding-bottom: 5%;
}
.middle-section {
  padding: 5% 0 5% 0;
  background-color: #ffffff;
  box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.75),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.75);
}
.middle-section .container {
  padding-top: 30px;
}
.bottom-section {
  padding-top: 5%;
}
.card {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.75);
}
.footer-link {
  display: inline-flex;
  padding: 5px;
}
.top-section-card img {
  width: 150px;
  height: 250px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.75);
}
.card-head {
  padding-top: 15px;
}
.card-head h2 {
  margin-bottom: 0px;
}
.btn-outline-secondary a {
  text-decoration: none;
}
h2 {
  padding: 20px;
}

.rating_scale {
  text-align: center;
  font-size: 0;
}
.rating_scale span {
  display: inline-block;
  box-sizing: border-box;
  padding: 0.3em 0.1em;
  margin: 2px;
  font-size: 15px;
  font-weight: 100;
  width: 3em;
  background: #909590;
  border-top-left-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
}
.rating_scale span.fill {
  background: #2c3e50;
}
.rating_scale span.half-fill {
  background: linear-gradient(90deg, #2c3e50 50%, #909590 50%);
}
.technology_rating {
  padding: 5px 0;
}
</style>