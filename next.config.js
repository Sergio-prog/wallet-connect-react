module.exports = {
  distDir: 'build',
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false
    }

    return config
  }
}
