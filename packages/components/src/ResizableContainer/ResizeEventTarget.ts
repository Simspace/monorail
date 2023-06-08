/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react'

export class ResizeEventTarget {
  private events: {
    [K in ResizeEvent]?: Set<(data: ResizeEventMap[K]) => void>
  } = {}

  addEventListener<K extends ResizeEvent>(
    type: K,
    callback: (data: ResizeEventMap[K]) => void,
  ): this {
    // @ts-expect-error
    this.events[type] ||= new Set()
    this.events[type]!.add(callback)
    return this
  }

  removeEventListener(): this
  removeEventListener<K extends ResizeEvent>(
    type: K,
    callback: (data: ResizeEventMap[K]) => void,
  ): this
  removeEventListener<K extends ResizeEvent>(
    type?: K,
    callback?: (data: ResizeEventMap[K]) => void,
  ): this {
    if (type === undefined) {
      this.events = {}
      return this
    }
    this.events[type]?.delete(callback!)
    return this
  }

  dispatchEvent<K extends ResizeEvent>(type: K, data: ResizeEventMap[K]): void {
    if (this.events[type] === undefined) {
      return
    }
    this.events[type]!.forEach(f => {
      f(data)
    })
  }
}

interface MouseResizeEvent {
  source: 'mouse'
  index: number
  event: MouseEvent
  target: HTMLElement
}

interface TouchResizeEvent {
  source: 'touch'
  index: number
  event: TouchEvent
  target: HTMLElement
}

interface MouseStartResizeEvent {
  source: 'mouse'
  index: number
  event: React.MouseEvent<HTMLElement>
}

interface TouchStartResizeEvent {
  source: 'touch'
  index: number
  event: React.TouchEvent<HTMLElement>
}

interface MouseStopResizeEvent {
  source: 'mouse'
  index: number
  event: MouseEvent
}

interface TouchStopResizeEvent {
  source: 'touch'
  index: number
  event: TouchEvent
}

export interface ElementSizeChangeEvent {
  index: number
  size: string | number | undefined
  direction: 1 | -1
}

export interface ResizeEventMap {
  resize: MouseResizeEvent | TouchResizeEvent
  startResize: MouseStartResizeEvent | TouchStartResizeEvent
  stopResize: MouseStopResizeEvent | TouchStopResizeEvent
  elementSizeChange: ElementSizeChangeEvent
  forceUpdate: void
}

export type ResizeEvent = keyof ResizeEventMap
