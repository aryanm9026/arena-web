# CACS Arena – ReactJS (Web) Track
**Problem statement:** Build the Arena web app where students sign in, browse events, register, and see their registrations.

## Must build
1. **Authentication** (JWT from the Arena API, or Google OAuth) + protected routes
2. **Profile page** (user info + registered events)
3. **Event catalogue page** with a working **Register** button
4. Registered events must load from the backend and persist after refresh
5. Responsive, clean UI with loading + error states

## Run
```bash
cp .env.example .env     # point VITE_API_URL to the provided API
npm install && npm run dev
```
Endpoints are in `API_CONTRACT.md`. Allowed: any UI/state libs. Bonus: dark mode, search/filter, toasts, tests, Lighthouse > 90.

## How to submit (read carefully)
1. **Fork** this repo to your own GitHub account.
2. `git clone` your fork, then run `git config core.hooksPath .githooks` (blocks accidental force-push).
3. Create a branch: `git checkout -b submission/<your-name>` and build the features below.
4. Commit regularly with meaningful messages (judges read your history).
5. `git push origin submission/<your-name>` — **never use `--force`/`--force-with-lease`**.
6. Open a **Pull Request** into this repo's `main`. Title: `[TRACK] Full Name - College`.
7. Do not edit `.github/`, `.githooks/` or `scripts/protect.sh`. PRs touching them are disqualified.
> Your PR stays open: organizers score PRs, they are not merged.
