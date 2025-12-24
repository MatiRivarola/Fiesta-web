const STORAGE_KEY = 'fiesta_hub_history';
const EXPIRATION_MS = 4 * 60 * 60 * 1000; // 4 hours

interface HistoryData {
  [id: string]: number; // timestamp
}

export const getAvailableItems = <T extends { id: string }>(items: T[]): T[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const history: HistoryData = raw ? JSON.parse(raw) : {};
    const now = Date.now();

    // Clean up old history
    const validHistoryIds = new Set<string>();
    const newHistory: HistoryData = {};
    
    Object.entries(history).forEach(([id, timestamp]) => {
      if (now - timestamp < EXPIRATION_MS) {
        newHistory[id] = timestamp;
        validHistoryIds.add(id);
      }
    });

    // Save cleaned history
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));

    // Filter items
    const available = items.filter(item => !validHistoryIds.has(item.id));
    
    // If we ran out of items (or almost), reset for this batch to avoid empty game
    if (available.length === 0) {
      return items; 
    }
    
    return available;
  } catch (e) {
    console.error("Error reading storage", e);
    return items;
  }
};

export const markItemAsSeen = (id: string) => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const history: HistoryData = raw ? JSON.parse(raw) : {};
    history[id] = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (e) {
    console.error("Error saving storage", e);
  }
};

export const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
}