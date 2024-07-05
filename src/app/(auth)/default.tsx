import { TProps } from '@/types/component/props';
import MainLayout from '../(route)/layout';
import Home from '../page';

export default function AuthDefualt({ children }: TProps) {
  return (
    <div className="">
      <Home />
    </div>
  );
}
