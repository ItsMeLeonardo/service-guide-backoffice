import { createTextGuide } from "@/application/guide/server/use-case";
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  const { title, content, services } = req.body;

  const userId = 1;

  const guide = await createTextGuide(title, content, userId, services);
  res.json({ guide });
});

export default router.handler({
  onError: (err) => {
    console.error(err);
  },
});
