export default function SimpleEditor({ editorRef, onChange }) {
  const formatText = (command) => {
    document.execCommand(command, false);
    editorRef.current?.focus();
  };

  return (
    <div className="w-full p-2 border border-gray-300 rounded bg-white">
      {/* Toolbar */}
      <div className="flex gap-2 mb-1 text-sm">
        <button onClick={() => formatText("removeFormat")} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded">
          Normal
        </button>
        <button onClick={() => formatText("bold")} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded font-bold">
          B
        </button>
        <button onClick={() => formatText("italic")} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded italic">
          I
        </button>
        <button onClick={() => formatText("underline")} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded underline">
          U
        </button>
      </div>
      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        className="min-h-24 border border-gray-300 rounded p-2 focus:outline-none"
        suppressContentEditableWarning
        onInput={() => {
          if (onChange) onChange(editorRef.current.innerHTML);
        }}
      ></div>
    </div>
  );
}
