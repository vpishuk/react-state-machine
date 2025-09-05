import { useCallback, useEffect, useMemo, useState } from "react";
import { State, StateMachine } from "./StateMachine";

export const useStateMachine = <
    StateDataType extends Record<string, unknown> = Record<string, unknown>,
    StateKeyType extends string | number = string | number
>({
    stateKey: initialStateKey,
    states: initialStates
}: {
    states: Partial<Record<StateKeyType, State<StateKeyType, StateDataType>>>;
    stateKey: StateKeyType;
}) => {
    const [stateKey, setState] = useState(initialStateKey);
    const [states, setStates] =
        useState<Partial<Record<StateKeyType, State<StateKeyType, StateDataType>>>>(initialStates);

    const addState = useCallback(
        (newStateKey: StateKeyType, newState: State<StateKeyType, StateDataType>) => {
            setStates((oldStates: Partial<Record<StateKeyType, State<StateKeyType, StateDataType>>>) => ({
                ...oldStates,
                [newStateKey]: newState
            }));
        },
        [setStates]
    );

    const goToState = useCallback(
        (newStateKey: StateKeyType) => {
            if (states[newStateKey]) {
                setState(newStateKey);
            }
        },
        [setState, states]
    );

    const goToNextState = useCallback(async () => {
        const stateConfig = states[stateKey];

        if (!stateConfig) {
            return;
        }

        const { nextState } = stateConfig;

        if (nextState && states[nextState]) {
            const nextStateConfig = states[nextState];
            await stateConfig?.onDeactivate?.();
            setState(nextState);
            await nextStateConfig?.onActivate?.();
        }
    }, [stateKey, states]);

    const hasNextState = useCallback(() => {
        const stateConfig = states[stateKey];

        if (!stateConfig) {
            return false;
        }

        return !!stateConfig.nextState;
    }, [stateKey, states]);

    const goToPrevState = useCallback(async () => {
        const stateConfig = states[stateKey];

        if (!stateConfig) {
            return;
        }

        const { prevState } = stateConfig;

        if (prevState && states[prevState]) {
            const prevStateConfig = states[prevState];
            await stateConfig?.onDeactivate?.();
            setState(prevState);
            await prevStateConfig?.onActivate?.();
        }
    }, [stateKey, states]);

    const hasPrevState = useCallback(() => {
        const stateConfig = states[stateKey];

        if (!stateConfig) {
            return false;
        }

        const { prevState } = stateConfig;
        return !!prevState;
    }, [stateKey, states]);

    const stateMachine = useMemo<StateMachine<StateKeyType, StateDataType>>(
        () => ({
            stateKey,
            state: states?.[stateKey],
            hasPrevState,
            hasNextState,
            goToNextState,
            goToPrevState,
            goToState,
            addState
        }),
        [stateKey, states, addState, goToNextState, goToPrevState, goToState, hasNextState, hasPrevState]
    );

    useEffect(() => {
        setState(initialStateKey);
    }, [initialStateKey]);

    useEffect(() => {
        setStates(states);
    }, [states]);

    useEffect(() => {
        const stateConfig = states[stateKey];

        if (!stateConfig) {
            return;
        }

        stateConfig?.onActivate?.();
    }, [stateKey, states]);

    useEffect(() => {
        goToState(stateKey);
    }, [stateKey, goToState]);

    return stateMachine;
};
