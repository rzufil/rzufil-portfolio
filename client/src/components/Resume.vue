<template>
  <div class="resume-container">
    <div class="container">
      <div class="resume-header">
        <h1><strong>Rafael Zufi Leite</strong></h1>
        <h6><strong>Software Developer</strong></h6>
      </div>
      <div class="resume-address">
        <p>Rua Paranaguá 410</p>
        <p>Londrina, PR, BR, 86020-030</p>
        <p><a href="mailto:rzufil@gmail.com">rzufil@gmail.com</a></p>
        <p><a href="tel:5543991800401">+55 (43) 99180-0401</a></p>
      </div>
      <div class="resume-body">
        <section class="experience">
          <h4><strong>Experience</strong></h4>
          <div
            class="employment"
            v-for="(experience, index) in experiences"
            :key="index"
          >
            <p class="employment-title">
              <strong>{{ experience.company }}</strong
              >, {{ experience.location }} |
              <strong>{{ experience.role }}</strong>
            </p>
            <p class="employment-dates">
              {{ experience.start_date | formatDate }} -
              {{ experience.end_date | formatDate }}
            </p>
            <ul class="employment-description">
              <li
                v-for="(description, index) in experience.description"
                :key="index"
              >
                {{ description }}
              </li>
            </ul>
          </div>
        </section>
        <section class="education">
          <h4><strong>Education</strong></h4>
          <div
            class="course"
            v-for="(degree, index) in degrees"
            :key="index"
          >
            <p class="course-title">
              <strong>{{ degree.university }}</strong>, {{ degree.location }} |
              <strong>{{ degree.course }}</strong>
            </p>
            <p class="course-dates">
              {{ degree.start_date | formatDate }} -
              {{ degree.end_date | formatDate }}
            </p>
            <p class="course-coursework">
              {{ degree.coursework }}
            </p>
          </div>
        </section>
        <section class="technical-skills">
          <h4><strong>Technical Skills</strong></h4>
          <ul class="skills">
            <li
              v-for="(skill, index) in skills"
              :key="index"
            >
              {{ skill.name }}
            </li>
          </ul>
        </section>
        <section class="languages">
          <h4><strong>Languages</strong></h4>
          <ul class="skills">
            <li
              v-for="(language, index) in languages"
              :key="index"
            >
              {{ language.name }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      experiences: {},
      degrees: {},
      skills: {},
      languages: {},
    };
  },
  created() {
    fetch("api/experiences")
      .then((response) => response.json())
      .then((data) => (this.experiences = data));
    fetch("api/degrees")
      .then((response) => response.json())
      .then((data) => (this.degrees = data));
    fetch("api/skills")
      .then((response) => response.json())
      .then((data) => (this.skills = data));
    fetch("api/languages")
      .then((response) => response.json())
      .then((data) => (this.languages = data));
  },
  filters: {
    formatDate: function (date) {
      if (!date) return "Present";
      date = new Date(date);
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return monthNames[date.getMonth()] + ' ' + date.getFullYear();
    },
  },
};
</script>

<style scoped>
.resume-container {
  padding: 100px 0 50px 0;
  text-align: left;
}
.resume-address {
  padding: 10px 0;
  line-height: 0.25em;
}
.resume-address a {
  text-decoration: none;
}
section {
  padding: 20px 0;
}
.employment,
.course {
  line-height: 1em;
}
.employment-title,
.course-title {
  text-decoration: underline;
  margin-bottom: 2px;
  padding-bottom: 2px;
}
.employment-dates,
.course-dates {
  font-size: .9rem;
}
.skills {
  list-style-type: none;
  margin-top: -10px;
  max-width: 75%;
  padding: 0;
}
.skills li {
  background: #2c302e;
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  list-style: none;
  margin: 15px 15px 0 0;
  padding: 10px;
  text-align: justify;
  cursor: default;
}
.skills li:hover {
  background: #909590;
}
</style>