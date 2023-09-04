const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  serverRuntimeConfig: {
    LAUNCHDARKLY_SDK_KEY: process.env.LAUNCHDARKLY_SDK_KEY,
  },
  publicRuntimeConfig: {
    LAUNCHDARKLY_SDK_CLIENT_SIDE_ID: process.env.LAUNCHDARKLY_SDK_CLIENT_SIDE_ID,
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },

  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    }

    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
