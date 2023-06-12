export default function BlogDetails({
  params,
}: {
  params: { blogId: string };
}) {
  return (
    <div className="flex justify-center mt-20">
      <p className="text-xl hover:text-blue-500 font-mono font-normal">
        Comments for blog {params.blogId}
      </p>
    </div>
  );
}
