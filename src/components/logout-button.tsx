import { logout } from '@/app/auth/actions';
import {
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export function LogoutButton() {
  return (
    <form action={logout}>
      <button type="submit" className="w-full">
        <DropdownMenuItem className="cursor-pointer">
          Sair
        </DropdownMenuItem>
      </button>
    </form>
  );
}
