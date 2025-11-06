import { create } from 'zustand';

interface GridDebugState {
  isGridVisible: boolean;
  toggleGrid: () => void;
}

export const useGridDebugStore = create<GridDebugState>((set) => ({
  isGridVisible: true,
  toggleGrid: () => set((state) => ({ isGridVisible: !state.isGridVisible })),
}));

