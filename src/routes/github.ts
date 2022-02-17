import { GitHubProfileStatus, UserStatus } from "github-profile-status";

export async function get() {
  const profileStatus = new GitHubProfileStatus({
    token: import.meta.env.VITE_GITHUB_ACCESS_TOKEN as string,
  });
  const status = (await profileStatus.get()) ?? ({} as UserStatus);

  return {
    headers: {
      "cache-control": "public, max-age=3600",
    },
    body: status,
  };
}
