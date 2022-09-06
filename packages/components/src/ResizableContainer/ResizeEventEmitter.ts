import type React from 'react'

export class ResizeEventEmitter {
  private events: {
    [K in ResizeEvent]?: Set<(data: ResizeEventMap[K]) => void>
  } = {}

  subscribe<K extends ResizeEvent>(
    event: K,
    handler: (data: ResizeEventMap[K]) => void,
  ): this {
    this.events[event] ||= new Set<
      (data: ResizeEventMap[ResizeEvent]) => void
    >()
    this.events[event]!.add(handler)
    return this
  }

  unsubscribe(): this
  unsubscribe<K extends ResizeEvent>(
    event: K,
    handler: (data: ResizeEventMap[K]) => void,
  ): this
  unsubscribe<K extends ResizeEvent>(
    event?: K,
    handler?: (data: ResizeEventMap[K]) => void,
  ): this {
    if (event === undefined) {
      this.events = {}
      return this
    }
    this.events[event]?.delete(handler!)
    return this
  }

  publish<K extends ResizeEvent>(event: K, data: ResizeEventMap[K]): void {
    if (this.events[event] === undefined) {
      return
    }
    this.events[event]!.forEach(f => {
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
}

export type ResizeEvent = keyof ResizeEventMap
