import React from 'react';

type PostCardProps = {
  title: string;
  body: string;
  author?: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, body, author }) => {
  return (
    <div className="bg-white border rounded-lg shadow p-4 hover:shadow-md transition">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{body}</p>
      {author && <p className="text-sm text-gray-500">By {author}</p>}
    </div>
  );
};

export default PostCard;