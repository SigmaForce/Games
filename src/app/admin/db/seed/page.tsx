import { PageWrapper } from "@/components";
import { seed, truncate } from "../../../../../prisma/seed/seed";

export default async function SeedPage() {
  try {
    let runTruncate = false;
    let runSeed = false;
    if (process.env.DB_TRUNCATE) {
      await truncate();
      runTruncate = true;
    }

    if (process.env.DB_SEED) {
      await seed();
      runSeed = true;
    }

    return (
      <PageWrapper>
        <div className="bg-slate-800 py-8">
          <div className="container text-slate-100 px-4">
            <p>
              Truncate: {runTruncate ? "YES" : "NO"} Seed:
              {runSeed ? "YES" : "NO"}
            </p>
            <p className="my-4 text-red-500 font-semibold">
              Delete DB_TRUNCATE and DB_SEED from your .env file.
            </p>
          </div>
        </div>
      </PageWrapper>
    );
  } catch (error) {
    console.log("SeedPage", error);
    return (
      <PageWrapper>
        <div className="bg-slate-800 py-8">
          <div className="container text-slate-100 px-4">
            <p className="my-4 text-red-500 font-semibold">
              Something went wrong!!!
            </p>
          </div>
        </div>
      </PageWrapper>
    );
  }
}
