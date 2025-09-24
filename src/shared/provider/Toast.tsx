import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import Toast from '../ui/Toast';

type ToastContextType = (message: string) => void;

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState('');

  const showToast = useCallback((message: string) => {
    setToast(message);
  }, []);

  const removeToast = () => {
    setToast('');
  };

  return (
    <ToastContext.Provider value={showToast}>
      {toast && <Toast message={toast} onRemove={removeToast} />}
      {children}
    </ToastContext.Provider>
  );
}

export const useShowToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('Provider 내부에서 사용 가능합니다.');
  return context;
};
