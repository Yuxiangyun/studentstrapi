export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://intuitive-basket-560a2813ce.strapiapp.com'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
