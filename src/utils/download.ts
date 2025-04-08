export const downloadPDF = (url: string) => {
  const link = document.createElement('a')
  link.href = url
  link.download = 'Alvaro_Llorente_-_Frontend_Developer.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
