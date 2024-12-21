
let stotage;
if (storage.getItem('color-theme') === 'dark' || (!('color-theme' in storage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}