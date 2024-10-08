import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const bookRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ author: z.string().optional() }).optional())
    .query(({ ctx, input }) => {
      return ctx.db.book.findMany({
        where: {
          author: input?.author,
        },
        include: {
          categories: {
            include: {
              category: true,
            },
          },
          ratings: true,
        },
      });
    }),
});
