// // environment.ts

// // WHY THIS FILE WAS ADDED:
// // Previously, LoginPage.ts had the login page URL hardcoded directly inside
// // the class (violates Dependency Inversion Principle - a high-level module
// // depending on a concrete, environment-specific detail instead of an
// // abstraction).

// // By centralizing all environment-specific URLs/config here, we get:
// 1. DIP compliance -> LoginPage now depends on this abstraction, not a
// hardcoded string.
// 2. Easy lhvironment switching (dev/staging/prod) via .env files, with
// ZERO code changes to any Page Object.
// 3. One single place to update if the base URL ever changes.

export const config = {
// process.env.BASE_URL lets CI/CD pipelines or local .env files override
// this per environment (e.g. staging vs production) without touching code.
baseUrl: process.env.BASE_URL || 'https://www.kapruka.com',

// Specific page paths are kept separate from the base URL so they can be
// reused/composed by other Page objects later (e.g. Cartpage, SignupPage).
loginPath: '/shops/customerAccounts/accountLogin.jsp',
}