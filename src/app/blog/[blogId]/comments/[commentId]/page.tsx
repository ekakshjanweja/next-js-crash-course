export default function Comment({ params }: { params: { commentId: string } }) {
  return (
    <div className="flex justify-center mt-20">
      <p className="text-xl hover:text-blue-500 font-mono font-normal">
        Comment ID: {params.commentId}
      </p>
    </div>
  );
}
