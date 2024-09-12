const Content: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <section className="p-4">
      <h2 className="text-2xl mb-4 text-zinc-200">{title}</h2>
      <p className="text-[0.9rem] text-zinc-400">{description}</p>
    </section>
  );
};

export default Content;