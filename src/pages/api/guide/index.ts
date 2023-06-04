import { createTextGuide } from "@/application/guide/server/use-case";
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post((req, res) => {
  const { title, content, user_id, services } = req.body;

  const guide = createTextGuide(title, content, user_id, services);
  res.json({ guide });
});

export default router.handler({
  onError: (err) => {
    console.error(err);
  },
});
