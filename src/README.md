
## ブログ 最新記事

<ul v-for="p in newPages">
    <li><a v-bind:href="p.path">{{ p.title }}: {{ unix2string(p.lastUpdated) }}</a></li>
</ul>

<script>
import unix2string from "./helper/unix2string.js"

export default {
  computed: {
      newPages() {
          return this.$site.pages
            .filter(p => {
                return p.path.startsWith("/blog/")
            })
            .sort((a, b) => b.lastUpdated - a.lastUpdated)
            .slice(0, 3)
      }
  },
  methods: {
      unix2string
  },
}
</script>
