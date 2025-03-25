import { useState } from "react";
export default function LikeDislikeButtons() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  return (
    <div className="mb-4">
      <button className="p-2 m-2 border rounded bg-green-500" onClick={() => setLikes(likes + 1)}>
        👍 {likes}
      </button>
      <button className="p-2 m-2 border rounded bg-red-500" onClick={() => setDislikes(dislikes + 1)}>
        👎 {dislikes}
      </button>
    </div>
  );
}