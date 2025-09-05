[react-state-machine](../globals.md) / State

# Type Alias: State\<StateKeyType, StateDataType\>

```ts
type State<StateKeyType, StateDataType> = object;
```

Defined in: [StateMachine.ts:2](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L2)

## Type Parameters

### StateKeyType

`StateKeyType` = `unknown`

### StateDataType

`StateDataType` = \{
\}

## Properties

### Component?

```ts
optional Component: React.FC<StateDataType>;
```

Defined in: [StateMachine.ts:3](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L3)

***

### nextState?

```ts
optional nextState: StateKeyType;
```

Defined in: [StateMachine.ts:5](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L5)

***

### onActivate()?

```ts
optional onActivate: () => Promise<unknown>;
```

Defined in: [StateMachine.ts:6](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L6)

#### Returns

`Promise`\<`unknown`\>

***

### onDeactivate()?

```ts
optional onDeactivate: () => Promise<unknown>;
```

Defined in: [StateMachine.ts:7](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L7)

#### Returns

`Promise`\<`unknown`\>

***

### prevState?

```ts
optional prevState: StateKeyType;
```

Defined in: [StateMachine.ts:4](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/StateMachine.ts#L4)
