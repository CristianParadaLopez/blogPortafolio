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

  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("postSlug", "==", postSlug),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, [postSlug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
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

  const handleLike = async (id) => {
    const commentRef = doc(db, "comments", id);
    await updateDoc(commentRef, { likes: increment(1) });
  };

  return (
    <div className="mt-20 border-t border-white/5 pt-16">
      {/* HEADER DE COMENTARIOS */}
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          Comentarios
          <span className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/10">
            {comments.length}
          </span>
        </h3>
      </div>

      {/* 1. LISTA DE COMENTARIOS PRIMERO (UX: Fomenta la lectura) */}
      <div className="space-y-8 mb-16">
        {comments.length === 0 ? (
          <p className="text-gray-500 italic text-center py-10 bg-white/[0.02] rounded-3xl border border-dashed border-white/10">
            Sé el primero en compartir tu opinión...
          </p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="group animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex gap-4">
                {/* Avatar dinámico */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#DE3642] to-[#8a1d25] flex items-center justify-center font-bold text-white shadow-lg border border-white/10">
                  {comment.name.charAt(0).toUpperCase()}
                </div>

                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-sm text-white">{comment.name}</h4>
                    <button
                      onClick={() => handleLike(comment.id)}
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#DE3642] bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5 transition-all hover:border-[#DE3642]/30"
                    >
                      <i className='bx bxs-heart'></i> {comment.likes || 0}
                    </button>
                  </div>

                  <div className="bg-white/[0.03] border border-white/5 p-5 rounded-2xl rounded-tl-none group-hover:border-white/10 transition-colors">
                    <p className="text-gray-400 text-sm leading-relaxed">{comment.text}</p>
                  </div>

                  <div className="flex gap-4 mt-3 ml-2">
                    <button
                      onClick={() => setActiveReply(activeReply === comment.id ? null : comment.id)}
                      className="text-[10px] uppercase tracking-tighter font-bold text-gray-500 hover:text-[#DE3642] transition-colors"
                    >
                      {activeReply === comment.id ? "Cancelar" : "Responder"}
                    </button>
                  </div>

                  {/* FORMULARIO DE RESPUESTA (Inline UX) */}
                  {activeReply === comment.id && (
                    <div className="mt-4 pl-4 border-l-2 border-[#DE3642]/30 animate-in zoom-in-95 duration-200">
                      <textarea
                        placeholder="Escribe una respuesta..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        className="w-full p-4 rounded-xl bg-[#111] border border-white/10 text-sm focus:border-[#DE3642] outline-none transition-all resize-none"
                      />
                      <button className="mt-2 bg-white/10 hover:bg-[#DE3642] text-white text-[10px] font-bold py-2 px-4 rounded-lg transition-all uppercase tracking-widest">
                        Enviar Respuesta
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 2. FORMULARIO PRINCIPAL AL FINAL */}
      <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#DE3642]/5 blur-[80px] rounded-full"></div>
        
        <h4 className="text-lg font-bold mb-6">Deja un comentario</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-sm focus:border-[#DE3642]/50 outline-none transition-all"
            required
          />
          <textarea
            placeholder="Escribe lo que piensas..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-sm focus:border-[#DE3642]/50 outline-none transition-all min-h-[120px] resize-none"
            required
          />
          <button
            type="submit"
            className="bg-[#DE3642] hover:bg-red-700 py-4 px-8 rounded-2xl text-white font-bold text-sm transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-red-900/20"
          >
            Publicar Comentario
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comments;