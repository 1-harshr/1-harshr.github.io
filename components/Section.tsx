type Props = {
  id: string;
  title: string;
  lede?: string;
  split?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, title, lede, split = true, className, children }: Props) {
  const classes = [split ? "split" : "", className ?? ""].join(" ").trim() || undefined;
  return (
    <section id={id} className={classes} aria-labelledby={`${id}-title`}>
      <div className="section-head">
        <h2 id={`${id}-title`}>{title}</h2>
        {lede && <p className="lede">{lede}</p>}
      </div>
      {children}
    </section>
  );
}
