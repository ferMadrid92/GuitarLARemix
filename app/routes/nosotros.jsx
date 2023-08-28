import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'


export function meta() {
  return [
    {title: 'GuitarLA - Sobre Nosotros'},
    {description: 'Venta de gutarras, blog de música'}
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p> Mauris egestas, lacus quis imperdiet sodales, orci nisl aliquam turpis, in pharetra tellus est nec metus. Praesent quis metus vel sapien ultrices congue ac sit amet magna.</p>
          <p>Morbi ultricies, risus vel varius tempus, urna lorem ultrices leo, eu pulvinar mauris sem finibus tellus. Nunc eu massa in tortor rutrum maximus. Nunc et odio pretium, sodales arcu a, sodales massa. In hac habitasse platea dictumst. Nulla ut arcu neque.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
