import { useAppDispatch, useAppSelector } from "./useDispatch"
import { onOpenDateModal, onCloseDateModal } from "../store";

export const useUiStore = () => {

  const dispatch = useAppDispatch();

  const { isDateModalOpen } = useAppSelector(state => state.ui);

  const openDateModal = () => {
    dispatch( onOpenDateModal() )
  }

  const closeDateModal = () => {
    dispatch( onCloseDateModal() )
  }

  const toggleDateModal = () => {
    (isDateModalOpen)
      ? openDateModal()
      : closeDateModal()
  }

  return {
    //* Properties
    isDateModalOpen,
    
    //* Métodos
    openDateModal,
    closeDateModal,
    toggleDateModal
  }
}