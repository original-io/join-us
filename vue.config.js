module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import '@/assets/globals.scss';`
            }
        }
    }
}
