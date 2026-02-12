import { useState, useEffect } from "react";
import { db } from "../data/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  doc,
  updateDoc,
  increment
} from "firebase/firestore";

const Comments = ({ postSlug }) => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [replyText, setReplyText] = useState("");
  const [activeReply, setActiveReply] = useState(null);

  // 🔥 Obtener comentarios en tiempo real
  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("postSlug", "==", postSlug),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      );
    });

    return () => unsubscribe();
  }, [postSlug]);

  // 📝 Agregar comentario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !text) return;

    await addDoc(collection(db, "comments"), {
      postSlug,
      name,
      text,
      createdAt: new Date(),
      likes: 0
    });

    setName("");
    setText("");
  };

  // ❤️ Like comentario
  const handleLike = async (id) => {
    const commentRef = doc(db, "comments", id);
    await updateDoc(commentRef, {
      likes: increment(1)
    });
  };

  // 💬 Responder comentario
  const handleReply = async (commentId) => {
    if (!replyText) return;

    await addDoc(
      collection(db, "comments", commentId, "replies"),
      {
        name,
        text: replyText,
        createdAt: new Date(),
        likes: 0
      }
    );

    setReplyText("");
    setActiveReply(null);
  };

  return (
    <div className="mt-16">
      <h3 className="text-2xl mb-6 font-semibold">Comentarios</h3>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10">
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded bg-[#111] border border-[#222]"
        />
        <textarea
          placeholder="Escribe un comentario..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-3 rounded bg-[#111] border border-[#222]"
        />
        <button
          type="submit"
          className="bg-[#DE3642] py-2 px-6 rounded text-white"
        >
          Comentar
        </button>
      </form>

      {/* Lista comentarios */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-[#0e0e0e] p-5 rounded-xl">

            <div className="flex justify-between">
              <h4 className="font-semibold">{comment.name}</h4>
              <button
                onClick={() => handleLike(comment.id)}
                className="text-sm text-gray-400 hover:text-[#DE3642]"
              >
                ❤️ {comment.likes || 0}
              </button>
            </div>

            <p className="text-gray-300 mt-2">{comment.text}</p>

            <button
              onClick={() =>
                setActiveReply(
                  activeReply === comment.id ? null : comment.id
                )
              }
              className="text-sm mt-2 text-[#DE3642]"
            >
              Responder
            </button>

            {/* Respuesta */}
            {activeReply === comment.id && (
              <div className="mt-4 flex flex-col gap-2">
                <textarea
                  placeholder="Escribe tu respuesta..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="p-2 rounded bg-[#111] border border-[#222]"
                />
                <button
                  onClick={() => handleReply(comment.id)}
                  className="bg-gray-700 py-1 px-4 rounded text-white text-sm"
                >
                  Enviar respuesta
                </button>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
