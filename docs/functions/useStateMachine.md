[react-state-machine](../globals.md) / useStateMachine

# Function: useStateMachine()

```ts
function useStateMachine<StateDataType, StateKeyType>(__namedParameters): StateMachine<StateKeyType, StateDataType>;
```

Defined in: [useStateMachine.ts:4](https://github.com/vpishuk/react-state-machine/blob/29f9039774d0e3b8050cdef65f26106cb23ea877/src/useStateMachine.ts#L4)

## Type Parameters

### StateDataType

`StateDataType` *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

### StateKeyType

`StateKeyType` *extends* `string` \| `number` = `string` \| `number`

## Parameters

### \_\_namedParameters

#### stateKey

`StateKeyType`

#### states

`Partial`\<`Record`\<`StateKeyType`, [`State`](../type-aliases/State.md)\<`StateKeyType`, `StateDataType`\>\>\>

## Returns

[`StateMachine`](../type-aliases/StateMachine.md)\<`StateKeyType`, `StateDataType`\>
