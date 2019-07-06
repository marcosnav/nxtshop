import { Commit } from 'vuex';

export namespace Cart {
  export interface State {
    products: string[];
  }

  /**
   * Payloads
   */
  export interface UpdatePayload {
    item: string;
    operation: 'ADD' | 'REMOVE';
  }

  /**
   * Mutations
   */
  type MutationPayload = UpdatePayload;

  export enum MutationType {
    UPDATE_CART = 'UPDATE_CART',
  }

  export function commit(
    c: Commit,
    type: Cart.MutationType.UPDATE_CART,
    p: Cart.UpdatePayload
  ): void;

  export function commit(
    c: Commit,
    type: Cart.MutationType,
    payload: MutationPayload
  ) {
    c(type, payload);
  }

  /**
   * Actions
   */

  export enum ActionType {
    ADD_TO_CART = 'ADD_TO_CART',
  }
}
