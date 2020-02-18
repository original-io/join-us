module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import '@/assets/globals.scss';`
            }
        }
    },
    chainWebpack: (config) => {
        config
                .plugin('html')
                .tap((args) => {
                    args[0].title = 'Desafio Original IO - Leonardo Ferraz';
                    return args;
                });
    },
};
