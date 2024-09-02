import { addManuscript } from "@lib/actions";

const Form = () => {
  return (
    <form className="w-full p-3 flex flex-col gap-2" action={addManuscript}>
      <textarea
        className="text-slate-300  h-40 p-4 border bg-slate-800 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="Type your text here..."
        autoFocus
        name="manuscript"
      />
      <input
        type="submit"
        value="Submit"
        className="bg-slate-500 p-2 rounded-lg w-20 "
      />
    </form>
  );
};

export default Form;
