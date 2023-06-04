import db from "@/persistence/server";

export async function getGuideList() {
  const guides = await db.guide.findMany({
    take: 10,
    orderBy: {
      id: "desc",
    },
    select: {
      id: true,
      title: true,
      service_guide: {
        select: {
          service: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return guides;
}

export async function getGuidesServiceId(serviceId: number) {
  const guides = await db.guide.findMany({
    where: {
      service_guide: {
        some: {
          service_id: serviceId,
        },
      },
    },
    select: {
      id: true,
      title: true,
      service_guide: {
        select: {
          service: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  return guides;
}
