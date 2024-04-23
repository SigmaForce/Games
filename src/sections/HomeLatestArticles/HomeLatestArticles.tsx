import { getArticleImage, getArticleUrl } from "@/helpers/articles";
import ArticleService from "@/services/Articles";
import Image from "next/image";
import Link from "next/link";

export default async function HomeLatestArticles() {
  const latestArticles = await ArticleService.getHomeLatestArticles();
  return (
    <div className="container mx-auto my-10 px-4 lg:px-0">
      <h2 className="text-3xl my-6 underline">Latest Articles</h2>

      <div className="grid grid-cols-4 gap-4 lg:h-[35vh] h-auto">
        {latestArticles.data.map((article) => {
          return (
            <Link
              href={getArticleUrl(article.slug)}
              key={article.title}
              className="flex-center relative z-0 overflow-hidden col-span-4 lg:col-span-1 h-[256px] lg:h-auto"
            >
              <div className="h-full w-full">
                <Image
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  src={getArticleImage(article.image)}
                  alt={article.title}
                  width={600}
                  height={400}
                />
              </div>
              <p className="absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full">
                {article.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
