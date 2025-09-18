import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate(); // HOOK PARA NAVEGAÇÃO
  function onBackClick() {
    navigate(-1);
  }
  return (
    <div className="h-screen w-screen bg-slate-500 p-4">
      <div className="w-[450px] space-y-4">
        <div className="flex justify-center relative mb-4">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-600"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-100 p-3 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="italic text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
