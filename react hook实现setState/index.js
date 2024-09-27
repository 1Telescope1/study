import React, { useState, useRef, useEffect, useCallback } from "react"

function useSetState(initialState) {
  // 使用 useState 管理状态
  const [state, setState] = useState(initialState)

  // 用于保存回调函数的 ref
  const callbackRef = useRef(null)

  // 定义一个 setter 函数，支持合并状态和回调函数
  const setMergedState = useCallback((newState, callback) => {
    // 如果 newState 是一个函数，则调用它并传递当前状态
    setState((prevState) => {
      const updatedState =
        typeof newState === "function" ? newState(prevState) : newState

      // 合并状态
      return { ...prevState, ...updatedState }
    })

    // 保存回调函数到 ref 中
    if (callback) {
      callbackRef.current = callback
    }
  }, [])

  // 使用 useEffect 检测状态更新后调用回调函数
  useEffect(() => {
    if (callbackRef.current) {
      // 调用回调函数
      callbackRef.current(state)

      // 清空回调函数
      callbackRef.current = null
    }
  }, [state])

  // 返回当前状态和自定义的 setter 函数
  return [state, setMergedState]
}

// 示例组件
const ExampleComponent = () => {
  // 使用自定义 Hook
  const [state, setMergedState] = useSetState({ count: 0, text: "Hello" })

  // 更新状态并传递回调函数
  const updateState = () => {
    setMergedState({ count: state.count + 1 }, (newState) => {
      console.log("State updated:", newState)
    })
  }

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Text: {state.text}</p>
      <button onClick={updateState}>Update State</button>
    </div>
  )
}

export default ExampleComponent
