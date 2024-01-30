const HeaderCategory = ({ titulo, subtitulo }) => {
  return (
    <div className="flex flex-col items-center my-6">
      <span className="font-semibold text-lg"> {titulo} </span>
      <span className="text-sm text-zinc-500"> {subtitulo} </span>
    </div>
  );
};

export default HeaderCategory;
