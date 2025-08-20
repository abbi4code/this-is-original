/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Removed for server mode
    swcMinify: false,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: { unoptimized: true },
    experimental: {
        serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs'],
    },
    // Disable static optimization for pages that need database access
    async headers() {
        return [
            {
                source: '/api/(.*)',
                headers: [
                    { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
                ],
            },
        ];
    },
};

module.exports = nextConfig;