import { useParams } from "react-router-dom";
import authorComponents from "../Authors";

const Author = () => {
  const { authorSlug } = useParams();

  const AuthorComponent = authorComponents[authorSlug];

  if (!AuthorComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2>Autor no encontrado</h2>
      </div>
    );
  }

  return <AuthorComponent />;
};

export default Author;
