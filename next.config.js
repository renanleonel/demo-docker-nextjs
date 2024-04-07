const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    webpack: (config, { dev, isServer }) => {
        if (dev && isServer) {
            config.watchOptions = {
                poll: 300,
                aggregateTimeout: 150,
            };
        }

        return config;
    },
});
