import { Record } from 'immutable';


const defaultState = {
    curr: null,
    amount: 0
};

export class PairStructure extends Record(defaultState) {}
