import { create } from 'zustand'

interface useProModalStore {
    isOpen: boolean
    onClose: () => void
    onOpen: () => void
}

export const useProModal = create<useProModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))