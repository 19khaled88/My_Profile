import Proton from 'proton-engine'
import RAFManager from 'raf-manager'
import React from 'react'
import '../../CSS/canvas.css'
import Canvas from './Canvas'

export default class Protons extends React.Component {
  constructor(props) {
    super(props)
    this.colors = [
      '#529B88',
      '#CDD180',
      '#FFFA32',
      '#FB6255',
      '#FB4A53',
      '#FF4E50',
      '#F9D423',
    ]
    this.renderProton = this.renderProton.bind(this)
  }

  handleCanvasInited(canvas) {
    this.createProton(canvas)
    RAFManager.add(this.renderProton)
  }

  componentWillUnmount() {
    try {
      RAFManager.remove(this.renderProton)
      this.proton.destroy()
    } catch (e) {}
  }

  createProton(canvas) {
    const proton = new Proton()
    const emitter = new Proton.Emitter()
    emitter.rate = new Proton.Rate(
      new Proton.Span(1, 3),
      new Proton.Span(0.05, 0.2),
    )

    emitter.addInitialize(new Proton.Mass(1))
    emitter.addInitialize(new Proton.Radius(10, 100))
    emitter.addInitialize(new Proton.Life(5, 14))
    emitter.addInitialize(
      new Proton.Position(
        new Proton.RectZone(0, 0, canvas.width, canvas.height),
      ),
    )

    emitter.addBehaviour(new Proton.Alpha(0, 1, Infinity, Proton.easeOutCubic))
    emitter.addBehaviour(new Proton.Scale(1, 0, Infinity, Proton.easeOutCubic))
    emitter.addBehaviour(new Proton.Color(this.colors, 'random'))

    emitter.emit()
    proton.addEmitter(emitter)

    const renderer = new Proton.CanvasRenderer(canvas)
    proton.addRenderer(renderer)
    emitter.preEmit(0.2)

    this.proton = proton
    this.renderer = renderer
  }

  createRenderer(canvas) {
    const context = canvas.getContext('2d')
    const renderer = new Proton.CanvasRenderer(canvas)

    renderer.onProtonUpdate = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.02)'
      context.fillRect(0, 0, canvas.width, canvas.height)
    }

    renderer.onParticleUpdate = (particle) => {
      context.beginPath()
      context.strokeStyle = particle.color
      context.lineWidth = 1
      context.moveTo(particle.old.p.x, particle.old.p.y)
      context.lineTo(particle.p.x, particle.p.y)
      context.closePath()
      context.stroke()
    }

    return renderer
  }

  handleResize(width, height) {
    this.renderer.resize(width, height)
  }

  renderProton() {
    this.proton.update()
    this.proton.stats.update(2)
  }

  render() {
    return (
      <div className="canvas">
        <Canvas
          onCanvasInited={this.handleCanvasInited.bind(this)}
          onResize={this.handleResize.bind(this)}
        />
        <div>
          <p>Statement</p>
          <p>Statement</p>
          <p>Statement</p>
          <p>Statement</p>
          <p>Statement</p>
          <p>Statement</p>
          <p>Statement</p>
        </div>
      </div>
    )
  }
}
