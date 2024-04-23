import { CloseIcon, MenuIcon } from "@/components/Icons/Icons";

type ToggleButtonProps = {
  isOpenMenu: boolean;
  handleToggleMenu: () => void;
};

export const ToggleButton = ({
  isOpenMenu = false,
  handleToggleMenu,
}: ToggleButtonProps) => {
  const title = isOpenMenu ? "Fechar" : "Abrir";
  return (
    <>
      <button onClick={handleToggleMenu} title={title}>
        {isOpenMenu && (
          <CloseIcon className="w-6 h-6 hover:bg-indigo-400/40 rounded-lg box-content p-2" />
        )}
        {!isOpenMenu && (
          <MenuIcon className="w-6 h-6 hover:bg-indigo-400/40 rounded-lg box-content p-2" />
        )}
      </button>
    </>
  );
};
