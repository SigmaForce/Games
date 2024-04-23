import { PageWrapper } from "@/components";
import { getArticleImage } from "@/helpers/articles";
import ArticleService from "@/services/Articles";
import Image from "next/image";

type ArticleDetailPageProps = {
  params: { slug: string };
};

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const slug = params.slug;
  const article = await ArticleService.getArticleBySlug(slug);

  if (!article) {
    return null;
  }

  return (
    <PageWrapper>
      <div className="container mx-auto my-6 px-4 lg:px-0">
        <div className="lg:w-2/3 w-full">
          <h1 className="text-3xl my-6">{article.title}</h1>
          <Image
            className="my-6 h-full w-full object-cover rounded-lg "
            src={getArticleImage(article.image)}
            alt={article.title}
            width={600}
            height={400}
          />
          <div className="flex flex-col">
            <p className="my-2 p-2 bg-slate-700 rounded-lg">
              {article.excerpt}
            </p>
            <p className="my-2">{article.content}</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
