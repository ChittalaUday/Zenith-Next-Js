import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";

export default async function AboutPage() {
  const posts = [
    {
      id: 1,
      title: "About Us",
    },
    {
      id: 2,
      title: "Our Mission",
    },
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <DynamicBreadcrumb />
      </div>
      <ul>
        {posts.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </ul>
    </div>
  );
}
