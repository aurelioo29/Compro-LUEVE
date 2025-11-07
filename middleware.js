import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "id"],
  defaultLocale: "en",
  localePrefix: "never",
  localeDetection: true,
});

export const config = {
  matcher: [
    // exclude: api, _next, assets, sitemap/robots, file statis
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)).*)",
  ],
};
