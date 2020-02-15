module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import '@/assets/globals.scss';`
            }
        }
    }
}
