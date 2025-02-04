import { useSyncExternalStore } from "react";
import type { FUEL_TYPE } from "../hooks/useFuelExtension";
import { localStore } from "../hooks/useLocalStorage";

type Listener = () => void;

class GatewayStore {
  private gatewayType: FUEL_TYPE | null;
  private listeners: Set<Listener>;

  constructor() {
    this.gatewayType = (localStore.getItem("thunder_fuel_gateway_type") as FUEL_TYPE) || null;
    this.listeners = new Set();
  }

  getSnapshot = () => this.gatewayType;

  subscribe = (listener: Listener) => {
    this.listeners.add(listener);

    return () => this.listeners.delete(listener);
  };

  setGatewayType = (type: FUEL_TYPE) => {
    this.gatewayType = type;
    localStore.setItem("thunder_fuel_gateway_type", type);
    this.emitChange(); // Notify listeners
  };

  clearGatewayType = () => {
    this.gatewayType = null;
    localStore.removeItem("thunder_fuel_gateway_type");
    this.emitChange(); // Notify listeners
  };

  private emitChange() {
    this.listeners.forEach((listener) => listener());
  }
}

export const gatewayStore = new GatewayStore();

// Leverages the performance and syncronization benefits of useSyncExternalStore
// Guarantees that all usages of the hook are using a updated state
export const useGatewayStore = () => {
  const gatewayType = useSyncExternalStore(gatewayStore.subscribe, gatewayStore.getSnapshot);

  const setGatewayType = gatewayStore.setGatewayType;
  const clearGatewayType = gatewayStore.clearGatewayType;

  return { gatewayType, setGatewayType, clearGatewayType };
};
