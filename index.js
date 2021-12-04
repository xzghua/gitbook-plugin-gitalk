var mygitalkConfig = {};

module.exports = {
    book: {
        assets: "./assets",
        css: [
            "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css",
        ],
        js: [
            "https://cdn.bootcss.com/blueimp-md5/2.12.0/js/md5.min.js",
            "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js",
            "mygitalk.js"
        ]
    },
    hooks: {
        "init": function() {
            this.log.debug.ln('init', this.options.pluginsConfig.gitalks);

            mygitalkConfig = this.options.pluginsConfig["gitalks"];
        },
        "page:before": function(page) {
            this.log.debug.ln('page:before', page.content);

            if (mygitalkConfig) {
                var str = '<div id="gitalk-container"></div>';

                page.content = page.content + '\n' + str;
            }

            return page;
        }
    }
};