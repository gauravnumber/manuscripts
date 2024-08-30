import { fetchManuscripts } from "@lib/fetchManuscripts";

const Manuscripts = async () => {
  const manuscripts = await fetchManuscripts()

  return (
    <>
      <div className="flex flex-col gap-3 p-3">
        {
          manuscripts?.map((manuscript) => {
            return (
              <div
                key={manuscript._id}
                className="text-white bg-slate-700 p-2 rounded whitespace-pre-line"
              >
                {manuscript.text}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Manuscripts;
