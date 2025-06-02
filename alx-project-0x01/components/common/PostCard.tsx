const PostCard: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Title</h2>
      </div>
      <p className="text-gray-600">Body</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: UserID</span>
        <span>Post ID: ID</span>
      </div>
    </div>
  );
};

export default PostCard;