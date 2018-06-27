import { Record } from 'immutable';
import PairStructure from './PairStructure';


const defaultState = {
    buy: new PairStructure(),
    sell: new PairStructure()
};

export class TaskStructure extends Record(defaultState) {}
