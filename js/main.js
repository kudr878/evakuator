new Swiper('.weight__wrapper', {
  loop: true,
  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

import evacuatorData from './data.js'

const itemsPerPage = 4
const maxPagesToShow = 4

const itemContainer = document.querySelector('.evacuator__items')
const paginationContainer = document.querySelector('.evacuator__pagination')
const itemTemplate = document.getElementById('evacuator-item-template').content

let currentPage = 1
const items = Array(20).fill(evacuatorData).flat()

function renderItems(data) {
  itemContainer.innerHTML = ''
  const fragment = document.createDocumentFragment()

  data.forEach((item) => {
    const itemElement = document.importNode(itemTemplate, true)
    itemElement.querySelector('.evacuator__image img').src = item.image
    itemElement.querySelector('.evacuator__description').textContent =
      item.description

    itemElement
      .querySelectorAll('.evacuator__prices-cost')
      .forEach((priceElement, index) => {
        priceElement.textContent = item.prices[index]
      })

    itemElement.querySelectorAll('.evacuator__button').forEach((button) => {
      button.style.display = 'none'
    })

    item.buttons.forEach((buttonData) => {
      const button = itemElement.querySelector(`#${buttonData.id}`)
      if (button) {
        button.style.display = 'block'
        button.disabled = buttonData.disabled || false
      }
    })

    fragment.appendChild(itemElement)
  })

  itemContainer.appendChild(fragment)
}

function displayPage(page) {
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  Array.from(itemContainer.children).forEach((item, index) => {
    item.style.display =
      index >= startIndex && index < endIndex ? 'flex' : 'none'
  })

  currentPage = page
  updatePagination()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function updatePagination() {
  paginationContainer.innerHTML = ''
  const totalPages = Math.ceil(items.length / itemsPerPage)

  if (totalPages <= 1) {
    paginationContainer.style.display = 'none'
    return
  }

  paginationContainer.style.display = 'flex'

  const { startPage, endPage } = getPageRange(currentPage, totalPages)

  if (startPage > 1)
    addPageButton(
      startPage - 1,
      '<img src="../../assets/icons/left-arrow.svg" alt="Previous Page" class="arrow"/>'
    )
  for (let i = startPage; i <= endPage; i++) addPageButton(i)
  if (endPage < totalPages)
    addPageButton(
      endPage + 1,
      '<img src="../../assets/icons/right-arrow.svg" alt="Next Page" class="arrow"/>'
    )
}

function getPageRange(current, total) {
  const startPage = Math.max(
    1,
    Math.floor((current - 1) / maxPagesToShow) * maxPagesToShow + 1
  )
  const endPage = Math.min(startPage + maxPagesToShow - 1, total)
  return { startPage, endPage }
}

function addPageButton(page, text = page) {
  const button = document.createElement('button')
  button.className = 'evacuator__pagination-button'
  button.innerHTML = text

  button.onclick = () => displayPage(page)

  if (page === currentPage) {
    button.classList.add('evacuator__pagination-button--active')
    button.setAttribute('aria-current', 'page')
    button.disabled = true
  }

  paginationContainer.appendChild(button)
}

renderItems(items)
displayPage(1)
