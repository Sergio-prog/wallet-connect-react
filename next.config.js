module.exports = {
  distDir: 'build',
  reactStrictMode: true,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false
    }

    return config
  }
}
