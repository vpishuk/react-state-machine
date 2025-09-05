[react-state-machine](../globals.md) / StateMachine

# Type Alias: StateMachine\<StateKeyType, StateDataType\>

```ts
type StateMachine<StateKeyType, StateDataType> = object;
```

Defined in: [StateMachine.ts:10](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L10)

## Type Parameters

### StateKeyType

`StateKeyType` = `string`

### StateDataType

`StateDataType` = `Record`\<`string`, `unknown`\>

## Properties

### addState()

```ts
addState: (stateKey, newStateKey) => void;
```

Defined in: [StateMachine.ts:18](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L18)

#### Parameters

##### stateKey

`StateKeyType`

##### newStateKey

[`State`](State.md)\<`StateKeyType`, `StateDataType`\>

#### Returns

`void`

***

### goToNextState()

```ts
goToNextState: () => void;
```

Defined in: [StateMachine.ts:13](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L13)

#### Returns

`void`

***

### goToPrevState()

```ts
goToPrevState: () => void;
```

Defined in: [StateMachine.ts:15](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L15)

#### Returns

`void`

***

### goToState()

```ts
goToState: (newStateKey) => void;
```

Defined in: [StateMachine.ts:17](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L17)

#### Parameters

##### newStateKey

`StateKeyType`

#### Returns

`void`

***

### hasNextState()

```ts
hasNextState: () => boolean;
```

Defined in: [StateMachine.ts:14](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L14)

#### Returns

`boolean`

***

### hasPrevState()

```ts
hasPrevState: () => boolean;
```

Defined in: [StateMachine.ts:16](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L16)

#### Returns

`boolean`

***

### state?

```ts
optional state: State<StateKeyType, StateDataType>;
```

Defined in: [StateMachine.ts:12](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L12)

***

### stateKey

```ts
stateKey: StateKeyType;
```

Defined in: [StateMachine.ts:11](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L11)
