import { useCallback, useState } from "react";

export interface UseToggleOpenReturn {
  isOpen: boolean;
  open(): void;
  close(): void;
  toggle(): void;
}

export function useToggleOpen(init = false): UseToggleOpenReturn {
  const [isOpen, setIsOpen] = useState(init);
  const toggle = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
