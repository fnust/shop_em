import * as Hapi from '@hapi/hapi';
import { ActionEntity } from '../model/entities/Action';

interface CreateI {
  remainderId: string;
  type: string;
  oldState: object;
}

export interface QueryI {
  shopId?: string;
  plu?: number;
  action?: string;
  dateFrom?: Date;
  dateTo?: Date;
  page: number;
  limit: number;
  skip: number;
}

export interface ActionGetOutput {
  data: ActionEntity[];
  meta: { page: number; limit: number; total: number };
}

export type ActionCreateInput = Hapi.Request & { payload: CreateI };
export type ActionGetInput = Hapi.Request & { query: QueryI };
