import { useLoaderData, isRouteErrorResponse, useRouteError, Link } from '@remix-run/react'
import {getPost} from '~/models/posts.server'
import { formatearFecha } from '~/utils/helpers'
import styles from '~/styles/blog.css'


/**  Manejo de errores */
export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
      return (
            <>
              <p className='error'>{error.status} {error.statusText}</p>
              <Link className='error-enlace' to="/">Tal vez quieras volver a la página principal</Link>
            </>
      )
  } else if (error instanceof Error) {
      return (
            <>
              <p className='error'>{error.status} {error.statusText}</p>
              <Link className='error-enlace' to="/">Tal vez quieras volver a la página principal</Link>
            </>
      )
  } else {
      return (
          
              <h1>Error desconocido</h1>
          
      )
  }
}

export async function loader({params}) {

  const {postUrl} = params

  const post = await getPost(postUrl)

  //manejo de error
  if(post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Entrada no encontrada',
      data: {} // Agrega un objeto de datos vacío
    })
  }
  
  return post
}

export function meta({data}) {
  if (!data || Object.keys(data).length === 0) { // Verifica si no hay datos o los datos están vacíos 
    return [
      {title: 'GuitarLA - Entrada no encontrada'},
      {description: 'Guitarras, venta de guitarras, Entrada no encontrada'}
    ]
  }

  return [
    {title: `GuitarLA - ${data?.data[0]?.attributes.titulo}`},
    {description: `Guitarras, venta de guitarras, ${data.data[0].attributes.titulo}`}
    
  ]
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}



function Posts() {
    const post = useLoaderData()
    const {titulo, contenido, imagen, publishedAt} = post?.data[0]?.attributes
  return (
    <article className="contenedor post mt-3">
        <img className="imagen" src={imagen?.data.attributes.url} alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}

export default Posts
