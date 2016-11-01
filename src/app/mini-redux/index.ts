export interface Action {
  type: string;
  payload?: any;
}

export interface Reducer<T> {
  (state: T, action: Action): T;
}

export interface ListenerCallback {
  (): void;
}

export interface UnsubscribeCallback {
  (): void;
}


class Store<T> {
  private _state: T;
  private _listeners: ListenerCallback[] = [];

  constructor(
    private reducer: Reducer<T>,
    initialState: T
  ) {
    this._state = initialState;
  }

  getState(): T {
    return this._state;
  }

  dispatch(action: Action): void {
    this._state = this.reducer(this._state, action);
    this._listeners.forEach((listener: ListenerCallback) => listener());
  }

  subscribe(listener: ListenerCallback): UnsubscribeCallback {
    this._listeners.push(listener);
    // 返回一个取消订阅的方法
    return () => {
      // 过滤掉需要取消订阅的方法，返回剩下的已经订阅的方法数组
      this._listeners = this._listeners.filter(listen => listen !== listener);
    };
  }
}

let plusSevenAction = {
  type: 'PLUS',
  payload: 7
};

let reducer: Reducer<number> = (state: number, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case 'DECREMENT':
      return state -1;
    case 'PLUS':
      return state + action.payload;
    default:
      return state;
  }
}

let store = new Store<number>(reducer, 0);
console.log(store.getState());

// 订阅一个事件，打印出当前的 state
let unsubscribe = store.subscribe(() => console.log('subscribed: ', store.getState()));

store.dispatch({type: 'INSCREMENT'}); // -> subscribed: 1
store.dispatch({type: 'INSCREMENT'}); // -> subscribed: 2

unsubscribe();
store.dispatch({type: 'DECREMENT'}); // nothing logged

console.log(store.getState()); // -> 1


export interface AddMessageAction extends Action {
  message: string;
}

export interface DeleteMessageAction extends Action {
  index: number;
}

class MessageActions {
  static addMessage(message: string): AddMessageAction {
    return {
      type: 'ADD_MESSAGE',
      message: message
    };
  }

  state
}
