import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "id"],
  defaultLocale: "en",
  localeDetection: false,
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
