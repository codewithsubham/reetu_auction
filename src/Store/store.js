import { create } from 'zustand'

const useStore = create((set) => ({
    bids: [],
    setBids: (newBids) => set((state) => ({ bids: newBids })),
    isUserLoggedIn: false,
    setUserLoggedIn: (status) => set((state) => ({ isUserLoggedIn: status })),
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))

export default useStore;