# Inline Svg loader for Vue 3

## Installation

```
npm i vue-inline-svgs
```

### Usage

```vue
<template>
  <div>
    <!--size/4-->
    <ul class="h-list">
      <li v-for="(path,index) in paths" :key="index">
        <inline-svg :size="size/4" :classes="classes" :path="path"/>
      </li>
    </ul>
    <!--size/3-->
    <ul class="h-list">
      <li v-for="(path,index) in paths" :key="index">
        <inline-svg :size="size/3" :classes="classes" :path="path"/>
      </li>
    </ul>
    <!--size/2-->
    <ul class="h-list">
      <li v-for="(path,index) in paths" :key="index">
        <inline-svg :size="size/2" :classes="classes" :path="path"/>
      </li>
    </ul>
    <!--size-->
    <ul class="h-list">
      <li v-for="(path,index) in paths" :key="index">
        <inline-svg :size="size" :classes="classes" :path="path"/>
      </li>
    </ul>
  </div>
</template>


<script>
import InlineSvg from "vue-inline-svgs"

export default {
  components: {
    InlineSvg
  },
  data() {
    size: 60,
    classes: "", 
    paths: [
      require(`!html-loader!vue-inline-svgs/src/stories/assets/colors.svg`),
      require(`!html-loader!vue-inline-svgs/src/stories/assets/code-brackets.svg`),
      require(`!html-loader!vue-inline-svgs/src/stories/assets/comments.svg`),
      require(`!html-loader!vue-inline-svgs/src/stories/assets/direction.svg`),
      require(`!html-loader!vue-inline-svgs/src/stories/assets/flow.svg`),
      require(`!html-loader!vue-inline-svgs/src/stories/assets/plugin.svg`),
      require(`!html-loader!vue-inline-svgs/src/stories/assets/repo.svg`),
      require(`!html-loader!vue-inline-svgs/src/stories/assets/stackalt.svg`)
    ]
  }
}
</script>

<style>
.h-list li {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
}

.h-list {
  margin: 50px;
}
</style>
```
<br>
<p align="center">
  <img src="https://github.com/a4anthony/vue-inline-svgs/blob/main/preview.png?raw=true"/>
</p>

### Note

For Nuxt applications, use the approach below to avoid runtime errors

```vue
<client-only>
  <inline-svg/>
</client-only>
```
# Enjoy!
