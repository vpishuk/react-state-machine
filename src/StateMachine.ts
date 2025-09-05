// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type State<StateKeyType = unknown, StateDataType = {}> = {
    Component?: React.FC<StateDataType>;
    prevState?: StateKeyType;
    nextState?: StateKeyType;
    onActivate?: () => Promise<unknown>;
    onDeactivate?: () => Promise<unknown>;
};

export type StateMachine<StateKeyType = string, StateDataType = Record<string, unknown>> = {
    stateKey: StateKeyType;
    state?: State<StateKeyType, StateDataType>;
    goToNextState: () => void;
    hasNextState: () => boolean;
    goToPrevState: () => void;
    hasPrevState: () => boolean;
    goToState: (newStateKey: StateKeyType) => void;
    addState: (stateKey: StateKeyType, newStateKey: State<StateKeyType, StateDataType>) => void;
};
