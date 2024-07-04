import MainLayout from '../(route)/layout';

type Props = { children: React.ReactNode };

export default function AuthDefualt({ children }: Props) {
  return (
    <div className=" opacity-30">
      <MainLayout children={children} />
    </div>
  );
}
