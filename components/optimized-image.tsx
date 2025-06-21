import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  loading?: 'lazy' | 'eager'
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    onError?.()
  }

  if (hasError) {
    return (
      <div 
        className={`bg-muted flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-muted-foreground text-sm">Error al cargar imagen</span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        priority={priority}
        loading={loading}
        sizes={sizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </div>
  )
}

// Componente específico para imágenes de proyectos
export function ProjectImage({
  src,
  alt,
  title,
  description,
  className = '',
  ...props
}: {
  src: string
  alt: string
  title: string
  description?: string
  className?: string
  [key: string]: any
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-lg ${className}`}>
      <OptimizedImage
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
      <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-gray-200 line-clamp-2">{description}</p>
        )}
      </figcaption>
    </figure>
  )
}

// Componente para imágenes de equipo
export function TeamImage({
  src,
  alt,
  name,
  role,
  className = '',
  ...props
}: {
  src: string
  alt: string
  name: string
  role: string
  className?: string
  [key: string]: any
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-full ${className}`}>
      <OptimizedImage
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="w-full h-full object-cover"
        sizes="(max-width: 768px) 100vw, 300px"
        {...props}
      />
      <figcaption className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-sm text-gray-200">{role}</p>
      </figcaption>
    </figure>
  )
}

// Componente para logos
export function LogoImage({
  src,
  alt,
  className = '',
  ...props
}: {
  src: string
  alt: string
  className?: string
  [key: string]: any
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={200}
      height={80}
      className={`object-contain ${className}`}
      sizes="(max-width: 768px) 150px, 200px"
      priority={true}
      {...props}
    />
  )
} 