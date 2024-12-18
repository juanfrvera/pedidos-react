import { getTable } from "@/util/supabase-client";

export default async function Test({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const shops = await getTable("shops");
  console.log(shops);
  const slug = (await params).slug;
  console.log(slug);
  return <div>Test {slug}</div>;
}
