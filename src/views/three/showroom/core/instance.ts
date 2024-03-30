import * as THREE from 'three'
import { Sizes, Time } from '@/utils/three'
import { Camera, Renderer, Controller, Light } from './General'
import { Models } from './Resources'
import type { InstanceOptions } from './interface'

export default class Instance {
  // eslint-disable-next-line
  static instance: Instance

  canvas!: HTMLCanvasElement

  scene!: THREE.Scene

  camera!: Camera

  renderer!: Renderer

  controller!: Controller

  light!: Light

  // 资源
  models!: Models

  // 工具类
  sizes!: Sizes

  time!: Time

  constructor(options?: InstanceOptions) {
    if (Instance.instance || !options) {
      return Instance.instance
    }
    Instance.instance = this
    const { canvas, wrapper } = options
    this.canvas = canvas
    this.sizes = new Sizes(canvas, wrapper)
    this.time = new Time()
    this.initScene()
    this.initEnvironment()

    // 初始化渲染器
    this.camera = new Camera(options.cameraOptions)
    this.renderer = new Renderer()
    this.controller = new Controller()
    this.light = new Light()

    this.models = new Models()

    this.sizes.on('resize', () => {
      this.resize()
    })
    this.time.on('update', () => {
      this.update()
    })
  }

  // 初始化场景
  initScene() {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0xffffff)
  }

  // 初始化环境
  initEnvironment() {
    const sunlight = new THREE.AmbientLight(0xffffff, 0.4)
    this.scene.add(sunlight)
  }

  resize() {
    this.camera.resize()
    this.renderer.resize()
  }

  update() {
    // this.camera.update()
    this.renderer.update()
    this.controller.update()
  }
}