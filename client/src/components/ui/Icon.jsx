import React from 'react'

// Tự động import tất cả SVG trong thư mục
const svgIcons = import.meta.glob('@/assets/icon/svg/*.svg', { eager: true })


// Tạo bộ chuyển đổi tên file
const iconNameConverter = (fileName) => {
  return fileName
    .replace(/^.*\/([^/]+)\.svg$/, '$1') // Lấy tên file
    .replace(/[^a-zA-Z0-9]/g, '_') // Thay thế ký tự đặc biệt bằng _
    .toLowerCase()
}

// Tạo object icons
const icons = Object.entries(svgIcons).reduce((acc, [path, module]) => {
  const iconName = iconNameConverter(path)
  
  acc[iconName] = module.default
 
  
  return acc
}, {})

const Icon = ({ name, size = 24, color = 'currentColor', className, ...props }) => {
  const normalizedName = iconNameConverter(name)
  const SvgComponent = icons[normalizedName]

  if (!SvgComponent) {
    console.warn(`Icon "${name}" không tồn tại`)
    return null
  }

  return (
    <SvgComponent
      width={size}
      height={size}
      fill={color}
      className={`inline-block ${className}`}
      {...props}
    />
  )
}

export default Icon