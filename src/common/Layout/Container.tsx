type Props = { children: React.ReactNode };

export default function Container({ children }: Props) {
  return <div className="xl:container xl:mx-auto">{children}</div>;
}
