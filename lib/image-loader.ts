"use client"

export default function cloudinaryLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // Replace 'your-cloud-name' with your actual Cloudinary cloud name
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`]
  return `https://res.cloudinary.com/your-cloud-name/image/upload/${params.join(",")}${src}`
}

