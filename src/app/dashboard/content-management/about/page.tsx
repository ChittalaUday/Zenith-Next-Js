import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";

interface Post {
  id: number;
  title: string;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Function to fetch posts data from API
async function getPostsData(): Promise<Post[]> {
  try {
    const response = await fetch('http://localhost:3000/api/posts');
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching posts data:', error);
    // Fallback data
    return [
      {
        id: 1,
        title: "About Us",
      },
      {
        id: 2,
        title: "Our Mission",
      },
    ];
  }
}

export default async function AboutPage() {
  const posts = await getPostsData();

  return (
    <div className="p-4">
      <div className="mb-4">
        <DynamicBreadcrumb />
      </div>
      <ul>
        {posts.map((post: Post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </ul>
    </div>
  );
}
