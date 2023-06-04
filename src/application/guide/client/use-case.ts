import { GuideRequest } from "@/domain/guide/client";

export async function createTextGuideApi(params: GuideRequest) {
  const res = await fetch("/api/guide/text", {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });

  await res.json();
}
